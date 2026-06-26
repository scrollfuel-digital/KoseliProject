import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactUs() {

  // ✅ Formik + Yup configuration
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      plotSize: "",
      message: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, "Too short")
        .required("Full name is required"),

      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter valid 10-digit phone number")
        .required("Phone number is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      plotSize: Yup.string()
        .required("Please select a plot size"),

      message: Yup.string()
        .min(10, "Minimum 10 characters required")
        .required("Message is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted:", values);

      // 🔗 API call can be added here

      resetForm();
      alert("Message sent successfully!");
    },
  });

  return (
    <>
      

      <main>
        {/* CONTACT SECTION */}
        <section className="bg-gradient-to-b from-[#e9f7f0] to-white py-20 px-4">
          <div className="max-w-6xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-14 pt-10">
              <p className="text-green-700 font-semibold text-sm uppercase tracking-wider">
                Let’s Grow Together
              </p>

              <h2 className="text-5xl font-bold mt-4">
                Get In <span className="text-green-700 italic">Touch</span>
              </h2>

              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Interested in owning your own farmland? Our team is here to walk
                you through every plot, every detail.
              </p>
            </div>

            {/* MAIN CARD */}
            <div className="grid md:grid-cols-[2fr_3fr] bg-white rounded-3xl shadow-xl overflow-hidden">

              {/* LEFT – CONTACT INFO */}
              <div className="bg-green-700 text-white p-10 flex flex-col justify-between">

                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h3>

                  <p className="text-green-100 text-sm mb-8">
                    Clear titles • RERA registered • Zero brokerage
                  </p>

                  <div className="space-y-6">

                   <div className="space-y-6">

  {/* Address */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=123+Orchard+Lane,+Hingna,+Nagpur,+440027"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-5 group"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white group-hover:text-green-700 transition">
      <FiMapPin size={20} />
    </div>

    <div>
      <p className="font-semibold">Visit Our Office</p>
      <p className="text-sm text-green-100">Hingna, Nagpur</p>
      <p className="text-xs text-green-200">
        123 Orchard Lane, Nagpur — 440027
      </p>
    </div>
  </a>

  {/* Phone */}
  <a
    href="tel:+917498147921"
    className="flex items-start gap-5 group"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white group-hover:text-green-700 transition">
      <FiPhone size={20} />
    </div>

    <div>
      <p className="font-semibold">Talk to an Advisor</p>
      <p className="text-sm text-green-100">+91 74981 47921</p>
      <p className="text-xs text-green-200">
        Mon – Sat, 9:00 AM to 7:00 PM
      </p>
    </div>
  </a>

  {/* Email */}
  <a
    href="mailto:sondhiyakrushna@gmail.com?subject=Farmland%20Inquiry&body=Hello,%0A%0AI%20am%20interested%20in%20your%20farmland%20projects.%20Please%20share%20more%20details.%0A%0AName:%20%0APhone:%20%0ACity:%20"
    className="flex items-start gap-5 group"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white group-hover:text-green-700 transition">
      <FiMail size={20} />
    </div>

    <div>
      <p className="font-semibold">Email Us</p>
      <p className="text-sm text-green-100">
        sondhiyakrushna@gmail.com
      </p>
      <p className="text-xs text-green-200">
        Replies within 4 hours
      </p>
    </div>
  </a>

</div>

                  </div>
                </div>

                {/* SOCIAL LINKS */}
                <div className="mt-10">
                  <p className="text-sm text-green-200 mb-4">
                    Connect with us
                  </p>

                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/koselireality/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white text-white hover:text-green-700 p-3 rounded-full transition"
                    >
                      <FaInstagram size={18} />
                    </a>

                    <a
                      href="https://wa.me/917498147921"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white text-white hover:text-green-700 p-3 rounded-full transition"
                    >
                      <FaWhatsapp size={18} />
                    </a>

                    <a
                      href="https://www.facebook.com/your_facebook_page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white text-white hover:text-green-700 p-3 rounded-full transition"
                    >
                      <FaFacebookF size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT – FORM */}
              <div className="p-12">
                <h3 className="text-3xl font-bold mb-2">
                  Send us a message
                </h3>

                <p className="text-gray-500 mb-8">
                  We'll get back within a few hours.
                </p>

                <form className="space-y-6" onSubmit={formik.handleSubmit}>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full border-b border-gray-300 py-3 outline-none focus:border-green-700"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.fullName && formik.errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">
                          {formik.errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full border-b border-gray-300 py-3 outline-none focus:border-green-700"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {formik.errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full border-b border-gray-300 py-3 outline-none focus:border-green-700"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <select
                      name="plotSize"
                      className="w-full border-b border-gray-300 py-3 outline-none focus:border-green-700"
                      value={formik.values.plotSize}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Select plot size</option>
                      <option>1000 Sq Ft</option>
                      <option>2000 Sq Ft</option>
                      <option>5000 Sq Ft</option>
                      <option>1 Acre</option>
                    </select>
                    {formik.touched.plotSize && formik.errors.plotSize && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.plotSize}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      rows="4"
                      name="message"
                      placeholder="Tell us about your dream farmland..."
                      className="w-full border-b border-gray-300 py-3 outline-none resize-none focus:border-green-700"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.message && formik.errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full flex items-center gap-2 transition"
                  >
                    Send Message <FiSend />
                  </button>

                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}