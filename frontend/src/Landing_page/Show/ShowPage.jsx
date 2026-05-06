import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { allListings } from '../../Data/dummy';
import Button from '../CommonComponents/CommonButton';
import axios from 'axios' ;


function ShowPage() {
    const {id} = useParams() ;
    const navigate = useNavigate() ;
    const [listing , setListing] = useState({ }) ;
    
    const fetchListing = async()=>{
      try{
        const response = await axios.get(`http://localhost:3000/listings/${id}`) ;
        const fetchedListing =  response.data.data ;
        setListing(fetchedListing) ;
       
      }
      catch(err){
        console.error(err.response?.data.message || err.message) ;
      }
    }

    useEffect(()=>{
    
       fetchListing() ;
     } , [id]) ;
        

    const [reviewData , setReviewData] = useState({ rating:"1" , comment:"" }) ;
    const handleInputChange = (e)=>{
      setReviewData({...reviewData , [e.target.name]:e.target.value}) ;
    } ;

    const handleReviewSubmit = async(e)=>{
      e.preventDefault() ;
      const token = localStorage.getItem("token") ;
      try{

        const response = await axios.post(`http://localhost:3000/listings/${id}/reviews` , reviewData , {
          headers:{
            Authorization: `Bearer ${token}` 
          }
        }) ;

        console.log(response?.data.message) ;

        fetchListing() 
        setReviewData({ rating:"1" , comment:"" }) ; // initialized the local state
        e.target.reset() ; // clear the form field in UI

      }
      catch(err){
        console.error(err.response?.data.message || err.message) ;
      }
    } ;

    const handleListingDelete = async()=>{
      const token = localStorage.getItem("token") ;
     
      try{

        const response = await axios.delete(`http://localhost:3000/listings/${id}` , { 
          headers:{
            Authorization: `Bearer ${token}` 
          }
        }) ;
        navigate("/") ;
        console.log(response?.data.message) ; 
      } 
      catch(err){
        console.error(err.response?.data.message || err.message) ; 
      }
    } ;

    const handleDestroyReview = async(reviewId)=>{
      const token = localStorage.getItem("token") ;
    
      try{
        const response = await axios.delete(`http://localhost:3000/listings/${id}/reviews/${reviewId}` , {
          headers:{
            Authorization: `Bearer ${token}`
          }
        }) ;
        fetchListing() ;
        console.log(response?.data.message) ;
      }
      catch(err){
        console.error(err.response?.data.message || err.message) ;
      }
    }

    return ( <>
     <div className="container showPage_div col-lg-8"> 
            <h2 className='mt-5'>{listing.title}</h2>
            <h4><i>Owned by: @ {listing.owner?.username}</i></h4>

            <div className="image_div mt-4">
            <img className='show_image' src={listing?.image?.url} alt="Roomly_image" />    
            </div>

            <div className='text-body mt-4 col-lg-9'>
                  <p>{listing.description}</p>
                  <p>Rs {listing.price}/Month</p>
                  <p>{listing.city}</p>
                  <p>{listing.location}</p>
                  <p>{listing.country}</p>
            </div>

            <div className="btn_div mb-5 mt-5">
                <Link to={`/listings/${listing._id}/edit`} ><Button clsName="update_btn" btnText="Update" /></Link>
                <Button clsName="book_btn" btnText="Book now" />
                <Button clsName="delete_btn" btnText="Delete" onClick={handleListingDelete} /> 
            </div>

            <div className='ratingForm'>
                <hr />
                <h2 className='mb-4 mt-4'>Leave a Review</h2>
                <form onSubmit={handleReviewSubmit} noValidate className="needs-validation">
                 <fieldset className="starability-slot" onChange={handleInputChange}>
                    <legend>Rating:</legend>
                    <input type="radio" id="no-rate" className="input-no-rate" name="rating" value="0" defaultChecked aria-label="No rating." />
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
                      <textarea className="form-control" name="comment" onChange={handleInputChange} placeholder="Leave your experience......" id="comment" rows="4" required ></textarea>
                      <div className="invalid-feedback">Add some valid comments</div>
                  </div>
                      <Button clsName="btn btn-dark mb-4" btnText="Add Review" />
                </form>
            </div>
              

            { listing.reviews && listing.reviews.length > 0  && 
            (
            <div className="Reviews mt-5">
              <hr />
               <h5 className='mt-5 mb-3'><b>All Reviews</b></h5>

            <div  className='reviewWrapper d-flex flex-wrap gap-3 '>        
              {listing.reviews?.map((review)=>{
                return(
        
                <div className="card col-lg-4  col-md-4 col-sm-5 col-12 mb-4 ms-1" key={review._id}>
    
                 <div className="card-body">
                   <h5 className="card-title"><b>@ {review.owner?.username}</b></h5>
                   <p className="starability-result ms-2" data-rating={review.rating} > </p> 
                   <p className="card-text ms-2">{review.comment}</p>
                   <p className='card-date ms-2'> <b>CreatedAt: {new Date(review.createdAt).toLocaleDateString()} </b></p>
                 
                 </div>
               
                   <Button clsName="btn btn-dark mb-2 w-50 ms-3"  btnText="Delete" onClick={()=>handleDestroyReview(review._id)}/>
                
                </div> )

              })}

                </div>
                
    
            </div> )
            }
                   
     </div>
    </> );
}

export default ShowPage;