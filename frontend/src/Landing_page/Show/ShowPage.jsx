import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { allListings } from '../../Data/dummy';
import Button from '../CommonComponents/CommonButton';


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
                <Link to={`/listings/${listing._id}/edit`} ><Button clsName="update_btn" btnText="Update" /></Link>
                <Button clsName="book_btn" btnText="Book now" />
                <Button clsName="delete_btn" btnText="Delete" />
            </div>

            <div className='ratingForm'>
                <hr />
                <h2 className='mb-4 mt-4'>Leave a Review</h2>
                <form action="" noValidate className="needs-validation">
                 <fieldset className="starability-slot">
                    <legend>Rating:</legend>
                    <input type="radio" id="no-rate" className="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
                    <input type="radio" id="first-rate1" name="rating" value="1" />
                    <label htmlFor="first-rate1" title="Terrible">1 star</label>
                    <input type="radio" id="first-rate2" name="rating" value="2" />
                    <label htmlFor="first-rate2" title="Not good">2 stars</label>
                    <input type="radio" id="first-rate3" name="rating" value="3" />
                    <label htmlFor="first-rate3" title="Average">3 stars</label>
                    <input type="radio" id="first-rate4" name="rating" value="4" />
                    <label htmlFor="first-rate4" title="Very good">4 stars</label>
                    <input type="radio" id="first-rate5" name="rating" value="5" />
                    <label htmlFor="first-rate5" title="Amazing">5 stars</label>
                 </fieldset>

                   <div  className="mb-4">
                      <label htmlFor="comment" className="form-label mt-4 fs-5">Comment:</label> <br />
                      <textarea className="form-control" name="comment" placeholder="Leave your experience......" id="comment" rows="4" required ></textarea>
                      <div className="invalid-feedback">Add some valid comments</div>
                  </div>
                      <Button clsName="btn btn-dark" btnText="Add Review" />
                </form>
            </div>
              
     
            <div className="Reviews mt-5">
              <hr />
               <h5 className='mt-5 mb-3'><b>All Reviews</b></h5>
              for(1){
                <div className="card col-5 mb-4 ms-1">
    
                 <div className="card-body">
                   <h5 className="card-title"><b>@review.owner.username</b></h5>
                   <p className="starability-result ms-2" data-rating="review.rating" > </p> 
                   <p className="card-text ms-2">review.comment</p>
                 
                 </div>
               
                   <Button clsName="btn btn-dark mb-2 w-50 ms-3"  btnText="Delete"/>
                
                </div>

                  } 
    
            </div>
                   
     </div>
    </> );
}

export default ShowPage;