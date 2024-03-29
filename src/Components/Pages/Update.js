import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'


function Update() {

    const {userId} = useParams();
    const {register, handleSubmit, setValue} = useForm();
    const navigate = useNavigate();
    

    async function fetchData(){
        let userData = await axios.get(`http://127.0.0.1:8000/person_app/person/${userId}`)
        setValue('fname', userData.data.fname)
        setValue('lname', userData.data.lname)
        setValue('email', userData.data.email)
        setValue('address', userData.data.address)
        setValue('city', userData.data.city)
        setValue('gender', userData.data.gender)
        setValue('pincode', userData.data.pincode)

    }
    function saveData(data){
        axios.put(`http://127.0.0.1:8000/person_app/person/${userId}`, data);
        navigate('/show')
    }
    useEffect(()=>{fetchData()},[]);
    
  return (
    <>
        <h1 style={{textAlign:'center'}}>Person Update Form</h1>
        <form style={{textAlign:'center'}} onSubmit={handleSubmit(saveData)} className='container mt-3 ml-4'>
            <label htmlFor=''>First Name</label>
                <input id='fn' name='fname' {...register('fname')}/><br /><br />
            <label>Last Name</label>
                <input id='ln' name='lname' {...register('lname')}/><br /><br />
            <label>Email</label>
                <input id='email' name='email' {...register('email')}/><br /><br />
            <label>Address</label>
                <input id='add' name='address' {...register('address')}/><br /><br />
            <label>City</label>
                <input id='ct' name='city' {...register('city')}/><br /><br />
            <label>Gender</label>
            <select id="gn" name="gender" {...register('gender')}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
            </select><br /><br />
            <label>Pincode</label>
                <input id='pin' name='pincode' {...register('pincode')}/><br /><br />
                <button className='btn btn-outline-success'>Update</button>
                <button className='btn btn-outline-warning'>Reset</button>


        </form>
    </>
  )
}

export default Update
