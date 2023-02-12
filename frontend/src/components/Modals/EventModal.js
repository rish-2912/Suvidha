import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { TextField  } from '@material-ui/core'
import { Select, MenuItem } from "@mui/material";
import { CreateDonation } from '../../functions/donationFunctions';
import { state_arr, s_a } from './stateandcity';
import { CreateEvent } from '../../functions/eventFunctions';
import { Toast } from '../Toast';
import { useSelector } from 'react-redux';
import { CHAT_SECRET } from '../../App';
import { CreateChat, GetLatestChat } from '../Chat/chatFunctions';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1.5px solid #000',
    boxShadow: 24,
    p: 4,
};

const EventModal = () => {
    
    const { myInfo } = useSelector(state=>state.auth)

    const [state,setState]=useState({
        name:'',
        description:'',
        address:'',
        category:'',
        image:'',
        state:'',
        city:''
    })
    const [loadImage,setLoadImage]=useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange=(e)=>{
        setState({...state,
            [e.target.name]:e.target.value
        })
    }

    const fileHandle=(e)=>{
        if(e.target.files.length!==0){
          setState({
            ...state,
            [e.target.name]:e.target.files[0]
          })
        }
        const reader=new FileReader();
        reader.onload=()=>{
          setLoadImage(reader.result)
        }
        reader.readAsDataURL(e.target.files[0]);
       
    
    }

    const btnstyle={margin:'8px 0'}

    const categories=[
        "Animals","Children","Elderly","Disability","Hunger","Education","Women","Others"
    ]

    const handlesubmit =async ()=>{
        try {

            const body={
                "title":state.name,
                "is_direct_chat": false
            }

            const headers={
                'Project-ID': '24aa43c0-8d60-4618-af47-b82fbe6a820f', 
                'User-Name': myInfo.userName, 
                'User-Secret': CHAT_SECRET,
            }

            await CreateChat(body,headers)

            const latestchat = await GetLatestChat(headers)


            const formData = new FormData()
            console.log(myInfo)
            formData.append("name",state.name)
            formData.append("description",state.description)
            formData.append("address",state.address)
            formData.append("category",state.category)
            formData.append("image",state.image)
            formData.append("state",state.state)
            formData.append("city",state.city)
            formData.append("Link",latestchat.data[0].id)
            formData.append("user_id",myInfo?.id)

            const response = await CreateEvent(formData)

            console.log(response)

            if(response?.data?.success){
                Toast.fire({
                    icon: "success",
                    title: "Event Added",
                });
                handleClose()
                window.location.reload();

                
        
            }

        } catch (error) {
            console.log(error)
        }
    }
    

    return (
        <div>
       <Button style={{ color: 'black',fontWeight: 500}} onClick={handleOpen}>Create Event</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                
                <h3 style={{textAlign:"center"}}>Create Event</h3><br />
                <TextField 
                    name="name" 
                    onChange={handleChange}  
                    variant='outlined' 
                    label='Name' 
                    placeholder='Enter name' 
                    fullWidth required
                />

                <br /><br />
                <TextField 
                    name="description" 
                    onChange={handleChange}  
                    variant='outlined' 
                    label='Description' 
                    placeholder='Enter description' 
                    size='large'
                    fullWidth required
                    multiline
                    rows={2}
                />


                <br /><br />
                <p>Select Category</p>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handleChange}
                  name="category"
                  fullWidth
                  placeholder='Select Category'
                  style={{ height: 40 }}
                >
                    { categories.map(sarr=>(
                        <MenuItem value={sarr}>{sarr}</MenuItem>
                    ))}
                </Select>

                <br /><br />
                <p>Select State</p>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handleChange}
                  name="state"
                  fullWidth
                  placeholder='Select State'
                  style={{ height: 40 }}
                >
                    { state_arr.map(sarr=>(
                        <MenuItem value={sarr}>{sarr}</MenuItem>
                    ))}
                </Select>

                {/* <br /><br /> */}
                {/* <p>Select City</p>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handleChange}
                  name="city"
                  fullWidth
                  placeholder='Select city'
                >
                    { s_a.map(sarr=>(
                        <MenuItem value={sarr}>{sarr}</MenuItem>
                    ))}
                </Select> */}

                <br /><br />
                <TextField 
                    name="address" 
                    onChange={handleChange}  
                    variant='outlined' 
                    label='Address' 
                    placeholder='Enter exact Address' 
                    fullWidth required
                />

                <br /><br />
                <input
                    name="image"
                    accept="image/*"
                    type="file"
                    id="select-image"
                    style={{ display: "n" }}
                    onChange={fileHandle}
                />
                
                <br /><br />
                <Button 
                    color='primary'
                    variant="contained" 
                    style={btnstyle} 
                    fullWidth
                    onClick={handlesubmit}

                >
                    Create
                </Button>

            </Box>
        </Modal>
        </div>
    );
}

export default EventModal