import axios from 'axios';
import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
    const {userId} = useParams();
    const nav = useNavigate();

    function deleteUser(){
        axios.delete(`http://127.0.0.1:8000/person_app/person/${userId}`);
        nav('/show');
    }
  return (
    <>
        
            <div className='container' style={{textAlign:'center'}}>
                <h1>Delete Confirmation</h1>
                
                <form onSubmit={()=>{deleteUser()}}>
                <h2>Are You Sure You want to delete the record?</h2>
                <input type='submit' value={'YES'} />
                <NavLink to={'/show'}><input type='button' value={'NO'} /></NavLink>
                </form>
            </div>
        
    </>
  )
}

export default Delete