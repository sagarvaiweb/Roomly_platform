import React, { useState , useEffect } from 'react'

function ListingForm({ initialData = null , onSubmit, description , buttonText }) {
    const [form, setForm] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
    location: "",
    country: "",
  });

  // If initialData exists (update), prefill the form
  useEffect(() => {
    if ( ! initialData)  return ;

      setForm({
        title: initialData.title || "",
        image: initialData.image?.url || "",
        description: initialData.description || "",
        price: initialData.price || "", 
        location: initialData.location || "",
        country: initialData.country || "",
      });
    
  }, [initialData]);

  const handleInput = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {  
    e.preventDefault();
    onSubmit(form); // call parent function
  };

    return ( <>
  <div className="roomly_glass_page">
  <div className="blob blob_blue"></div>
  <div className="blob blob_teal"></div>
  <div className="blob blob_yellow"></div>

  <form className="roomy_glass_form" onSubmit={handleSubmit}>
    <div className="form_layout">
      
      <div className="form_inputs_side">
        <h2 className="glass_title">{description}</h2>
        <p className="glass_sub">Fill in accurate details to attract genuine renters</p>

        <div className="glass_field">
          <label>Listing Title</label>
          <input type="text" name="title" placeholder='Give your cachy title' value={form.title} onChange={handleInput} required />
        </div>

        <div className="glass_field">
          <label>Image URL</label>
          <input type="text" name="image" placeholder='Select the image' value={form.image} onChange={handleInput} required />
        </div>

        <div className="glass_field">
          <label>Description</label>
          <textarea name="description" rows="3"  placeholder='Provide some description' value={form.description} onChange={handleInput} required />
        </div>

        <div className="glass_row_aligned">
          <div className="glass_field flex_2">
            <label>Monthly Price</label>
            <div className="price_input_group">
              <span className="currency_tag">Rs</span>
              <input type="number" name="price" placeholder='Enter a price' value={form.price} onChange={handleInput} required />
            </div>
          </div>
          
          <div className="glass_field flex_3">
            <label>Location</label>
            <input type="text" name="location" placeholder='Enter location'   value={form.location} onChange={handleInput} required  />
          </div>

          <div className="glass_field flex_3">
            <label>Country</label>
            <input type="text" name="country" placeholder='Enter country' value={form.country} onChange={handleInput} required  />
          </div>
        </div>
      </div>

      {/* Preview Side: Badge moved for visibility */}
      <div className={`${form.image ? "form_preview_side":"d-none"}`}>
        <div className="glass_preview_circle">
           <img 
              src={form.image} 
              alt="Room" 
            />
        </div>
        <div className="preview_label_badge">Preview</div>
      </div>
    </div>

    <button type="submit" className="glass_submit_btn">
    {buttonText}
    </button>
  </form>
</div>
    </> );
}

export default ListingForm;