import React,{useEffect} from "react";


import { useSelector } from "react-redux";
import {Button}from '@mui/material'; // Grid version 1
import { AddDonation } from "../../functions/donationFunctions";

const Checkout = ({totalcost,id}) => {

 

  const {loading,authenticate,error,successMessage,myInfo}=useSelector(state=>state.auth) 
  const data={totalcost:totalcost/100,_id:id,myid:myInfo.id}
    const options = {
        key: 'rzp_test_yHHzOUj82fzwPi',
        amount: totalcost, //  = INR 1
        name: 'Payment',
        description: '',
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        handler: function(response) {
          window.location.reload()
          console.log(response)
        },
        prefill: {
          // name: 'Gaurav',
          // contact: '9999999999',
          // email: 'demo@demo.com'
        } ,
        notes: {
            address: 'some address'
        },
        theme: {
            color: '#f7f2ee',
            hide_topbar: false
        }
    };
    
    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
        AddDonation(data)
    };
    
        
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

  return (
    <>
<Button onClick={openPayModal} variant='contained' style={{ fontFamily: 'inherit', width: '100%', background: 'linear-gradient(to bottom right, #7C65D8, #20B9CC)', marginTop:'10px' }}>Donate</Button>
    </>
  );
};

export default Checkout;