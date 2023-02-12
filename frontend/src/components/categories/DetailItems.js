
import React,{useState,useEffect} from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import demo from '../../assets/demo.png'

import { useParams } from 'react-router';
import { getAllDonations } from '../../functions/donationFunctions';
const items = [
    {
        "id": '1',
        "img": '',
        "title": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "name": 'Rishabh Foundation',
        "needed": '12345678',
        "raised": '11334567',
        "donors": '46',
        "category": 'animal'
    },
    {
        "id": '1',
        "img": '',
        "title": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "name": 'Rishabh Foundation',
        "needed": '12345678',
        "raised": '11334567',
        "donors": '46',
        "category": 'animal'
    },
    {
        "id": '1',
        "img": '',
        "title": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "name": 'Rishabh Foundation',
        "needed": '12345678',
        "raised": '11334567',
        "donors": '46',
        "category": 'animal'
    },
    {
        "id": '1',
        "img": '',
        "title": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "name": 'Rishabh Foundation',
        "needed": '12345678',
        "raised": '11334567',
        "donors": '46',
        "category": 'animal'
    },
    {
        "id": '1',
        "img": '',
        "title": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "name": 'Rishabh Foundation',
        "needed": '12345678',
        "raised": '11334567',
        "donors": '46',
        "category": 'animal'
    },
    {
        "id": '1',
        "img": '',
        "title": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "name": 'Rishabh Foundation',
        "needed": '12345678',
        "raised": '11334567',
        "donors": '46',
        "category": 'animal'
    },
]









const DetailItems = () => {

    const [item, setitem] = useState([])

    const fetchdonations=async()=>{
        const x = await getAllDonations()
        if(x?.data?.success){
            console.log(x)
            setitem(x.data.data)
        }
    }
    
    
    useEffect(() => {
        fetchdonations()
    }, [])
    




    return (
        <>
          {item && item.map((item) => {
                const percentage = `${((((Number(item.donatedAmount)) / Number((item.targetAmount))) * 100)>100) ? (100):((((Number(item.donatedAmount)) / Number((item.targetAmount))) * 100))}%`
                console.log(percentage)
                return (
                    <Box style={{ width: '29%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '8px', boxShadow: '0px 5px 10px -5px', marginBottom: '16px', marginLeft: '20px',marginRight: '20px' }}>
                        <img src={"/images/"+ item.image} style={{ height: '200px' }} />
                        <Box style={{ padding: '20px' }}>
                            <Box>
                                <Typography style={{ fontFamily: 'inherit', fontWeight: '600' }}>{item.name}</Typography>
                                <Typography style={{ fontFamily: 'inherit', fontSize: '14px', color: 'rgba(0,0,0,.3)', marginTop: '12px' }}>{item.CreatedBy?.userName}</Typography>
                            </Box>
                            <Box style={{ marginTop: '12px' }}>
                                <Typography style={{ fontFamily: 'inherit' }}><span style={{ fontWeight: '600' }}>₹{item.donatedAmount}</span>  <span style={{ color: 'rgba(0,0,0,.3)', fontWeight: '600', fontSize: '15px' }}> donatedAmount out of ₹{item.targetAmount}</span></Typography>
                                <Box style={{ height: '8px', borderRadius: '4px', background: ' rgba(0, 0, 0, .3)' }}>
                                    <Box style={{ width: `${percentage}`, height: '100%', borderRadius: '4px', background: 'linear-gradient(to bottom right, #7C65D8, #20B9CC)' }}></Box>
                                </Box>
                                <Typography style={{ fontFamily: 'inherit', textAlign: 'center', fontWeight: 'bold', fontSize: '15px' }}>{item.donors?.length} Donors</Typography>
                            </Box>
                            <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                                <Button variant='outlined' style={{ fontFamily: 'inherit', width: '49%' }}>Share</Button>
                                <Link to={"donatedetail/"+item._id} style={{ fontFamily: 'inherit', width: '49%' }}>
                                    <Button variant='contained' style={{  width: '100%', background: 'linear-gradient(to bottom right, #7C65D8, #20B9CC)' }}>Donate</Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
        </>
    )
}

export default DetailItems