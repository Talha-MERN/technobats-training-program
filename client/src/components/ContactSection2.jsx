import React from "react";
import { useFormik } from "formik";
import { contactSchema } from "./../schemas"; 
import axios from "axios";
import { contactEndpoints } from "./../api/endpoints/ContactEndpoints";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  occupation: "",
  message: "",
};

export default function ContactSection() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await axios.post(
            contactEndpoints.contactService(),
            values,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          action.resetForm();
          alert("Your query has been submitted.");
          console.log(response);
        } catch (error) {
          console.error("Error submitting form:", error);
          console.log(values);
          
        }
      },
    });

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Form */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md border border-dashed border-gray-300">
          <h3 className="text-lg font-bold text-black mb-6">
            Contact Our Education Experts Now!
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border rounded-lg p-3 text-sm focus:ring focus:ring-yellow-500 outline-none"
                />
                {errors.name && touched.name ? (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your contact number"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border rounded-lg p-3 text-sm focus:ring focus:ring-yellow-500 outline-none"
                />
                {errors.phone && touched.phone ? (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                ) : null}
              </div>
            </div>

            {/* Email & Occupation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border rounded-lg p-3 text-sm focus:ring focus:ring-yellow-500 outline-none"
                />
                {errors.email && touched.email ? (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                ) : null}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  placeholder="Your current occupation"
                  value={values.occupation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border rounded-lg p-3 text-sm focus:ring focus:ring-yellow-500 outline-none"
                />
                {errors.occupation && touched.occupation ? (
                  <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>
                ) : null}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border rounded-lg p-3 text-sm focus:ring focus:ring-yellow-500 outline-none"
                rows="4"
              ></textarea>
              {errors.message && touched.message ? (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              ) : null}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-yellow-400 text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition font-medium"
            >
              Send your questions
            </button>
          </form>
        </div>

        {/* Right Info */}
        <div>
          <p className="text-black font-semibold">Ways To Reach Us</p>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            We Would Love To Talk To You
          </h2>
          <p className="text-gray-600 mb-8">
            Join our digital marketing institute and discover how we can have a
            conversation about boosting your success in the digital realm.
          </p>

          {/* Call */}
          <div className="border border-dashed border-blue-400 p-4 rounded-lg flex items-center gap-4 mb-4">
            <FaPhoneAlt className="text-black text-xl" />
            <div>
              <p className="font-semibold">Call Us</p>
              <p className="text-gray-600 text-sm">Landline: 0316-4641190</p>
            </div>
          </div>

          {/* Whatsapp */}
          <div className="border border-dashed border-green-400 p-4 rounded-lg flex items-center gap-4 mb-4">
            <FaWhatsapp className="text-black text-2xl" />
            <div>
              <p className="font-semibold">Whatsapp</p>
              <p className="text-gray-600 text-sm">Number: 0316-4641190</p>
              <p className="text-gray-600 text-sm">Hours (11am – 6pm)</p>
            </div>
          </div>

          {/* Visit */}
          <div className="border border-dashed border-blue-400 p-4 rounded-lg flex items-center gap-4">
            <FaMapMarkerAlt className="text-black text-xl" />
            <div>
              <p className="font-semibold">Visit Our Office</p>
              <p className="text-gray-600 text-sm">Bahawalpur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
