// src/components/ClientForm.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addClient, editClient } from '../features/clientsSlice';
import { sendEmail } from '../utils/emailService';

const ClientForm = ({ editableClient, onSubmitComplete }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    idCard: '',
    notes: '',
  });

  // Prefill form if editing
  useEffect(() => {
    if (editableClient) {
      setFormData(editableClient);
    } else {
      setFormData({ name: '', email: '', phone: '', idCard: '', notes: '' });
    }
  }, [editableClient]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Send OTP to email (Gmail)
    if (formData.email) {
      sendEmail({
        to_email: formData.email,
        message: `Your OTP is: ${otp}`,
        subject: 'OTP Verification'
      }).then(() => {
        alert(`OTP sent to ${formData.email}`);
      }).catch(() => {
        alert('Failed to send OTP to email');
      });
    }

    // Send OTP to phone (mock SMS alert)
    if (formData.phone) {
      alert(`OTP sent to phone ${formData.phone}: ${otp}`);
    }

    if (editableClient) {
      dispatch(editClient(formData));
    } else {
      dispatch(addClient(formData));
    }

    setFormData({ name: '', email: '', phone: '', idCard: '', notes: '' });

    if (onSubmitComplete) onSubmitComplete();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">
        {editableClient ? 'Edit Client' : 'Add New Client'}
      </h2>

      <div className="mb-3">
        <label className="block text-sm font-medium" htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter client's name"
          className="w-full border p-2 rounded-md"
          autoComplete="name"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter client's email"
          className="w-full border p-2 rounded-md"
          autoComplete="email"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium" htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter client's phone number"
          className="w-full border p-2 rounded-md"
          autoComplete="tel"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium" htmlFor="idCard">ID Card Number</label>
        <input
          type="text"
          name="idCard"
          id="idCard"
          value={formData.idCard}
          onChange={handleChange}
          placeholder="Enter client's ID card number"
          className="w-full border p-2 rounded-md"
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium" htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          id="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Enter any additional notes"
          className="w-full border p-2 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-md mt-2"
      >
        {editableClient ? 'Update Client' : 'Add Client'}
      </button>
    </form>
  );
};

export default ClientForm;
