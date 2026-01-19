'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shootType: '',
    date: '',
    location: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', shootType: '', date: '', location: '', message: '' });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-lg text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-playfair font-bold text-[#111111] mb-2">
          Thank You!
        </h3>
        <p className="text-[#5B5B5B] mb-6">
          Your message has been sent successfully. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-[#111111] font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 md:p-10 shadow-lg max-w-4xl mx-auto">
      <h3 className="text-2xl font-playfair font-bold text-[#111111] mb-8 text-center">
        {siteConfig.contact.form.heading}
      </h3>

      <div className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#111111] mb-2">
              {siteConfig.contact.form.fields.name.label} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={siteConfig.contact.form.fields.name.placeholder}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C7A6B] transition-all ${
                errors.name ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#111111] mb-2">
              {siteConfig.contact.form.fields.email.label} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={siteConfig.contact.form.fields.email.placeholder}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C7A6B] transition-all ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Shoot Type & Date Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shoot Type Dropdown */}
          <div>
            <label htmlFor="shootType" className="block text-sm font-medium text-[#111111] mb-2">
              {siteConfig.contact.form.fields.shootType.label}
            </label>
            <select
              id="shootType"
              name="shootType"
              value={formData.shootType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C7A6B] transition-all bg-white"
            >
              <option value="">Select a shoot type...</option>
              {siteConfig.contact.form.fields.shootType.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-[#111111] mb-2">
              {siteConfig.contact.form.fields.date.label}
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C7A6B] transition-all"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-[#111111] mb-2">
            {siteConfig.contact.form.fields.location.label}
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder={siteConfig.contact.form.fields.location.placeholder}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C7A6B] transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#111111] mb-2">
            {siteConfig.contact.form.fields.message.label} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={siteConfig.contact.form.fields.message.placeholder}
            rows={5}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C7A6B] transition-all resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#8C7A6B] text-white py-4 rounded-lg font-medium uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2 hover:bg-[#7A695C] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {siteConfig.contact.form.button}
            </>
          )}
        </button>
      </div>
    </form>
  );
}
