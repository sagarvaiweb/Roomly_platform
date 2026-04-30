import React, { useState, useEffect } from 'react';

function ListingForm({ initialData = null, onSubmit, description, buttonText }) {
  const [form, setForm] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
    city: "",      // Added city
    location: "",
    country: "",
  });

  useEffect(() => {
    if (!initialData) return;

    setForm({
      title: initialData.title || "",
      image: initialData.image?.url || "",
      description: initialData.description || "",
      price: initialData.price || "",
      city: initialData.city || "",       // Prefill city
      location: initialData.location || "",
      country: initialData.country || "",
    });
  }, [initialData]);

  const handleInput = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form); 
  };

  return (
    <>
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
                <input type="text" name="title" placeholder='Give your catchy title' value={form.title} onChange={handleInput} required />
              </div>

              <div className="glass_field">
                <label>Image URL</label>
                <input type="text" name="image" placeholder='provide image for listing' value={form.image} onChange={handleInput} required />
              </div>

              <div className="glass_field">
                <label>Description</label>
                <textarea name="description" rows="3" placeholder='Provide some description' value={form.description} onChange={handleInput} required />
              </div>

              {/* Row for City, Location, and Country */}
              <div className="glass_row_aligned">
                <div className="glass_field flex_2">
                  <label>City</label>
                  <input type="text" name="city" placeholder='e.g. Mahendranagar' value={form.city} onChange={handleInput} required />
                </div>

                <div className="glass_field flex_3">
                  <label>Location / Address</label>
                  <input type="text" name="location" placeholder='e.g. X64C+C2 Bhimdatta' value={form.location} onChange={handleInput} required />
                </div>

                <div className="glass_field flex_2">
                  <label>Country</label>
                  <input type="text" name="country" placeholder='Nepal' value={form.country} onChange={handleInput} required />
                </div>
              </div>

              <div className="glass_field" style={{marginTop: '1rem'}}>
                <label>Monthly Price (Rs)</label>
                <div className="price_input_group">
                  <span className="currency_tag">Rs</span>
                  <input type="number" name="price" placeholder='Enter price' value={form.price} onChange={handleInput} required />
                </div>
              </div>
            </div>

            {/* Preview Side */}
            {form.image && (
              <div className="form_preview_side">
                <div className="glass_preview_circle">
                  <img src={form.image} alt="Room Preview" />
                </div>
                <div className="preview_label_badge">Preview</div>
              </div>
            )}
          </div>

          <button type="submit" className="glass_submit_btn">
            {buttonText}
          </button>
        </form>
      </div>
    </>
  );
}

export default ListingForm;