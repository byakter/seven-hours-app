'use client';

import React, { useState } from 'react';
import styles from './CreateTripForm.module.css'

const CreateTripForm = () => {

  const [formData, setFormData] = useState({
    image: null,
    title: '',
    description: '',
    location: '',
    price: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.tagrget.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted', formData);
  };


  return (
    <div className={styles['form-container']}>
      <h1 className={styles['form-title']}>Create a new trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            className={styles['form-label']}>
            Upload Image:
          </label>
          <input
            type='file'
            id='image'
            name='image'
            accept='image/'
            onChange={handleFileChange}
            className={styles['form-input']}
          />
        </div>
        <div>
          <label
            className={styles['form-label']}>
            Title:
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={40}
            placeholder=''
            className={styles['form-input']}
          />
        </div>
        <div>
          <label
            className={styles['form-label']}>
            Description:
          </label>
          <input
            type='text'
            id='description'
            name='description'
            value={formData.title}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={200}
            placeholder='Add a short description of your trip (up to 200 characters)'
            className={styles['form-input']}
          />
        </div>
        <div>
          <label
            className={styles['form-label']}>
            Locatin:
          </label>
          <input
            type='text'
            id='location'
            name='location'
            value={formData.title}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={40}
            placeholder='City Name'
            className={styles['form-input']}
          />
        </div>
        <div>
          <label
            className={styles['form-label']}>
            Price:
          </label>
          <input
            type='number'
            id='price'
            name='price'
            value={formData.title}
            onChange={handleChange}
            required
            placeholder='$$$'
            className={styles['form-input']}
          />
        </div>
        <button
          type='button' className={styles['form-input']} >Create</button>
      </form>
    </div>

  )
}

export default CreateTripForm;
