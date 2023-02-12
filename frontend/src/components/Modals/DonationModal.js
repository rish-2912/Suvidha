import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { TextField  } from '@material-ui/core'
import { Select, MenuItem } from "@mui/material";
import { CreateDonation } from '../../functions/donationFunctions';
import { Toast } from '../Toast';
import { useSelector } from 'react-redux';

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

const DonationModal = () => {
    
    const [state,setState]=useState({
        name:'',
        description:'',
        targetAmount:'',
        category:'',
        image:''
    })
    const [loadImage,setLoadImage]=useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { myInfo } = useSelector(state=>state.auth) 


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
            const formData = new FormData()
            formData.append("name",state.name)
            formData.append("description",state.description)
            formData.append("targetAmount",state.targetAmount)
            formData.append("category",state.category)
            formData.append("image",state.image)
            formData.append("user_id",myInfo?.id)

            const response = await CreateDonation(formData)

            console.log(response)
            if(response?.data?.success){
                Toast.fire({
                    icon: "success",
                    title: "Donation Added",
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
        <Button style={{ color: 'black',fontWeight: 500}} onClick={handleOpen}>Create Donation</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                
                <h3 style={{textAlign:"center"}}>Create Donation</h3><br />
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
                    fullWidth required
                />


                <br /><br />
                <TextField 
                    name="targetAmount" 
                    onChange={handleChange}  
                    variant='outlined' 
                    label='Target Amount' 
                    placeholder='Enter target Amount' 
                    fullWidth required
                />

                <br /><br />
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handleChange}
                  name="category"
                  fullWidth
                  placeholder='Select Category'
                >
                    { categories.map(cat=>(
                        <MenuItem value={cat}>{cat}</MenuItem>
                    ))}
                </Select>

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

export default DonationModal