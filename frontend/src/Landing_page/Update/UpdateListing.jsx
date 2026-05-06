import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ListingForm from '../CommonComponents/ListingForm';
import axios from 'axios';
import { toast } from 'react-toastify';

function UpdateListing() {

     const { id } = useParams();
     const  navigate = useNavigate() ;

     const [listingToEdit , setListingToEdit] = useState(null) ;

     useEffect(()=>{
        const fetchListing = async ()=>{
            try{

                const response = await axios.get(`http://localhost:3000/listings/${id}`) ;
                setListingToEdit(response?.data?.data) ;
                toast.success(response?.data?.message) ;
                
            }
            catch(err){
                toast.error(err.response?.data?.message || err.message) ;
            }
        }

        fetchListing() ;
     } , [id])

     const handleUpdate = async (formData) => {
     const token = localStorage.getItem("token") ;

     try{
         const response = await axios.put(`http://localhost:3000/listings/${id}/update` , formData , { 
            headers:{
                Authorization: `Bearer ${token}`
            }
         }) ;

         navigate(`/listings/${id}`);  // go to show page 
         toast.success(response?.data?.message) ;
     }
     catch(err){
        toast.error(err.response?.data?.message || err.message) ;
     }
    
  };
    return ( <>
     <ListingForm  initialData={listingToEdit} onSubmit={handleUpdate} description="Update Your listing"  buttonText="Update"  />
    </> );
}

export default UpdateListing;