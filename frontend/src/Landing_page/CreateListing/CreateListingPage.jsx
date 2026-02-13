import React from 'react'
import ListingForm from '../CommonComponents/ListingForm';
import { useNavigate } from 'react-router-dom';


function CreateListingPage() {
    //  const { listings, setListings } = useContext(ListingsContext);
     const navigate = useNavigate() ;

     const handleCreate = (formData) => {
    //  const newListing = {
    //   _id: Date.now(),
    //   title: formData.title,
    //   description: formData.description,
    //   price: formData.price,
    //   location: formData.location,
    //   country: formData.country,
    //   image: { url: formData.image },
    // };

    // setListings([...listings, newListing]);
    navigate("/");
  };

    return ( <>
    <ListingForm onSubmit={handleCreate} description ="Create Your New Listing"  buttonText="Create" />
    </> );
}

export default CreateListingPage;