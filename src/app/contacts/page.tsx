// app/contact/page.tsx
import React from 'react';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div>
      <main className="min-h-screen bg-white py-12 px-6 md:px-24">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-[Poppins]">Get in Touch</h1>
          <p className="mt-4 text-gray-600 font-[Poppins]">
            We'd love to hear from you! Fill out the form below or reach out via the contact details.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6  p-8">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="example@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-700 font-[Poppins]">
            <div>
              <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
              <p>Email: <a href="mailto:support@example.com" className="text-black">support@example.com</a></p>
              <p>Phone: <a href="tel:+2348000000000" className="text-black">+234 800 000 0000</a></p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Office Location</h2>
              <p>123 Market Street</p>
              <p>Lagos, Nigeria</p>
              <p>ZIP 100001</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
              <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
              <p>Saturday & Sunday: Closed</p>
            </div>
          </div>

        </div>


      </main>
      <Footer />
    </div>
  );
}
