import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


function Show() {
    const [users, setUser] = useState([]); 
    async function fetchData(){
        let usersData = await axios.get('http://127.0.0.1:8000/person_app/person/'); 
        setUser(usersData.data);
    }
    useEffect(()=>{fetchData()},[] 
    );
  return (
    <>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Gender</th>
                    <th>Pincode</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                
                {
                    users.map((obj)=>{
                        return(
                            <tr>
                                <td>{obj.fname} {obj.lname}</td>
                                <td>{obj.email}</td>
                                <td>{obj.address}</td>
                                <td>{obj.city}</td>
                                <td>{obj.gender}</td>
                                <td>{obj.pincode}</td>
                                <td>
                                    <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-success'>Update</button></NavLink>
                                    <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger'>Delete</button></NavLink>
                                </td>
                            </tr>
                        )
                    })

                }
                    
                
            </tbody>
        </table>
    
    </>
  )
}

export default Show;