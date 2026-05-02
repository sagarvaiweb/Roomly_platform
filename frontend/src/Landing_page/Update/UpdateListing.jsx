import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ListingForm from '../CommonComponents/ListingForm';
import { allListings } from '../../Data/dummy';
import axios from 'axios';

function UpdateListing() {

     const { id } = useParams();
     const  navigate = useNavigate() ;

     const [listingToEdit , setListingToEdit] = useState(null) ;

     useEffect(()=>{
        const fetchListing = async ()=>{
            try{

                const { data:{data : listing }} = await axios.get(`http://localhost:3000/listings/${id}`) ;
                setListingToEdit(listing) ;
                
            }
            catch(err){
                console.error(err.response?.data?.message || err.message) ;
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
         console.log(response.data.message) ;
     }
     catch(err){
        console.error(err.response?.data?.message || err.message) ;
     }
    
  };
    return ( <>
     <ListingForm  initialData={listingToEdit} onSubmit={handleUpdate} description="Update Your listing"  buttonText="Update"  />
    </> );
}

export default UpdateListing;