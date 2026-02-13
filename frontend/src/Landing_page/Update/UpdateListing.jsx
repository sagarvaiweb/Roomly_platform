import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ListingForm from '../CommonComponents/ListingForm';
import { allListings } from '../../Data/dummy';

function UpdateListing() {

     const { id } = useParams();
     const  navigate = useNavigate() ;

     // Find the listing to edit
     const listingToEdit = allListings.find((item) => item._id == id);

     const handleUpdate = (formData) => {
     
    
      navigate(`/listings/${id}`);  // go to show page
  };
    return ( <>
     <ListingForm  initialData={listingToEdit} onSubmit={handleUpdate} description="Update Your listing"  buttonText="Update"  />
    </> );
}

export default UpdateListing;