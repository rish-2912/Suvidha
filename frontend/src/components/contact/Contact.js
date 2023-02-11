import React, { useEffect, useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import emailjs from '@emailjs/browser';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
const Contact = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const changeHandler = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('')
      }, 3000)
    }
  }, [status])
  const submitHandler = (e) => {
    e.preventDefault()
    emailjs.send('service_fi5azxb', 'template_cmyiqig', values, 'N5o5rMrm7uYC68sS8')
      .then((res) => {
        console.log('SUCCESS!', res)
        setValues({
          fullName: '',
          email: '',
          message: ''
        })
        setStatus('SUCCESS')
      }, err => {
        console.log('FAILED..', err)
      })
  }
  return (
    <div style={{ width: '40%', margin: 'auto 0' }}>
      {status && renderPopup()}
      {status ? <form onSubmit={submitHandler} style={{ marginTop: '50px' }}>
        <div>
          <label className='text-gray-500 text-sm'>Full Name</label>
          <input className='border-b-2 outline-none text-gray-700 w-full bg-gray-100 h-10 px-2' value={values.fullName} type='text' name='fullName' placeholder='John Doe' required onChange={changeHandler}></input>
        </div>
        <div>
          <label className='text-gray-500 text-sm'>Email</label>
          <input className='border-b-2 outline-none text-gray-700 w-full bg-gray-100 h-10 px-2' value={values.email} type='email' name='email' placeholder='name@example.com' required onChange={changeHandler}></input>
        </div>
        <div>
          <label className='text-gray-500 text-sm'>How can we help you?</label>
          <textarea name='message' rows='5' className='w-full border b-2 outline-none bg-gray-100 p-2' placeholder='Type your query here' onChange={changeHandler} value={values.message} style={{ width: '100%', border: '1px solid black' }}></textarea>
        </div>
        <button type='submit' style={{ height: '30px', padding: '0px 30px', borderRadius: '5px' }}>
          <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0' }}>
            <Typography style={{}}>Send</Typography>
            {/* <ChevronRightIcon /> */}
          </Box>
        </button>
      </form> : <form onSubmit={submitHandler} style={{ marginTop: '0px' }}>
        <div>
          <label className='text-gray-500 text-sm'>Full Name</label>
          <input className='border-b-2 outline-none text-gray-700 w-full bg-gray-100 h-10 px-2' value={values.fullName} type='text' name='fullName' placeholder='John Doe' required onChange={changeHandler}></input>
        </div>
        <div>
          <label className='text-gray-500 text-sm'>Email</label>
          <input className='border-b-2 outline-none text-gray-700 w-full bg-gray-100 h-10 px-2' value={values.email} type='email' name='email' placeholder='name@example.com' required onChange={changeHandler}></input>
        </div>
        <div>
          <label className='text-gray-500 text-sm'>How can we help you?</label>
          <textarea name='message' rows='5' className='w-full border b-2 outline-none bg-gray-100 p-2' placeholder='Type your query here' onChange={changeHandler} value={values.message} style={{ width: '100%', border: '1px solid black' }}></textarea>
        </div>
        <button type='submit' style={{ height: '30px', padding: '0px 30px', borderRadius: '5px' }}>
          <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0' }}>
            <Typography style={{}}>Send</Typography>
            {/* <ChevronRightIcon /> */}
          </Box>
        </button>
      </form>
      }
    </div >
  )
}
const renderPopup = () => {
  return (
    <div style={{ padding: '1px 4px', background: '#4bb543', marginBottom: '-50px' }}><p>Message sent successfully</p></div>
  )
}

export default Contact