import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios' ;

function HomePage() {
   const [allListings , setAllListings ] = useState([]) ;

   useEffect(()=>{
    const fetchListings = async()=>{
       try{
         const {data : { data:listings }} = await axios.get("http://localhost:3000/listings") ;
         setAllListings(listings) ;
       }
       catch(err){
        console.error("listings not fetched from the database") ;
       }
    }

    fetchListings() ;
   } , [])

    return ( <>
    <ul className='cardWrap'>
        {
            allListings.map((listing , index)=>{       
         return (
        <li key={listing._id} >

        <Link to={`/listings/${listing._id}`} className='text-decoration-none'>
        <div className="card card_top text-start  card-image-overlay " >
        <img src={listing?.image?.url} className="card-img-top"   alt="listing_image"/>
        <div className="card-body">
        <h5 className="card-title">{listing.title}</h5>
        <p className="card-text">Rs{listing.price}/Month</p>
       
        </div>
        </div>
        </Link>
        </li>

         )

            })
        }
    </ul>
    </> );
}

export default HomePage;