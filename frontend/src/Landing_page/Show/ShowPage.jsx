import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { allListings } from '../../Data/dummy';


function ShowPage() {
    const {id} = useParams() ;
    const listing = allListings.find( item => item._id === id) ;
    if(!listing){
        return <h1>Listing is not found</h1>
    }
    return ( <>
     <div className="container showPage_div col-lg-6"> 
            <h2 className='mt-5'>{listing.title}</h2>

            <div className="image_div mt-4">
            <img className='show_image' src={listing?.image?.url} alt="show_image" />    
            </div>

            <div className='text-body mt-4 col-lg-9'>
                  <p>{listing.description}</p>
                  <p>Rs {listing.price}/Month</p>
                  <p>{listing.location}</p>
                  <p>{listing.country}</p>
            </div>

            <div className="btn_div mb-5 mt-5">
                <Link to={`/listings/${listing._id}/edit`} ><button className='update_btn'>Update</button></Link>
                <button className='book_btn'>Book now</button>
                <button type='submit' className='delete_btn'>Delete</button> 
            </div>
        </div>
    </> );
}

export default ShowPage;