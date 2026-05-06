import React from 'react'
import ListingForm from '../CommonComponents/ListingForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


function CreateListingPage() {
   
     const navigate = useNavigate() ;
     
     const handleCreate = async (formData) => {
      const token = localStorage.getItem("token") ;

      try{
        const response = await axios.post("http://localhost:3000/listings/create" , formData , {
          headers:{
            Authorization: `Bearer ${token}` 
          }
        }) ;

        navigate("/") ;
        toast.success(response?.data?.message) ;
      }
      catch(err){
        toast.error(err.response?.data?.message || err.message) ;
      }
  };

    return ( <>
    <ListingForm onSubmit={handleCreate} description ="Create Your New Listing"  buttonText="Create" />
    </> );
}

export default CreateListingPage;