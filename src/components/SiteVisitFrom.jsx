import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { User, Phone, Mail, MapPin, Sprout, Check } from "lucide-react";
import { useState } from "react";

const TIME_SLOTS = [
  { id: "morning", label: "Morning", range: "9 AM – 12 PM" },
  { id: "afternoon", label: "Afternoon", range: "12 PM – 4 PM" },
  { id: "evening", label: "Evening", range: "4 PM – 7 PM" },
];

/* Validation */
const validationSchema = Yup.object({
  name: Yup.string().required("Full name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  date: Yup.string().required("Please select a visit date"),
  time: Yup.string().required("Please select a time slot"),
  address: Yup.string().required("Address is required"),
});

export default function SiteVisitForm({ plot, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  /* 🔒 SAFETY GUARD */
  if (!plot) return null;

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT – SELECTED PLOT CARD */}
      <div className="relative h-full min-h-[500px]">
        <img
          src={plot.image}
          alt={plot.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-0 p-8 text-white">
          <h3 className="text-3xl font-bold mb-3">{plot.title}</h3>
          <p className="mb-2">📍 {plot.location}</p>
          <p className="mb-2">📐 {plot.size} sq ft</p>
          <p className="text-xl font-semibold mt-4">
            ₹{plot.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* RIGHT – FORM */}
      <div className="p-6 sm:p-10 bg-white relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
        >
          ×
        </button>

        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-green-700 mb-2">
          <Sprout size={14} />
          Plot Visit Request
        </div>

        <h2 className="text-2xl font-semibold mb-6">
          Contact for Site Visit
        </h2>

        {submitted ? (
          <div className="text-center py-16">
            <Check size={44} className="mx-auto text-green-700 mb-4" />
            <h3 className="text-xl font-semibold">Request Submitted</h3>
            <p className="text-sm text-gray-500 mt-2">
              Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              date: "",
              time: "",
              address: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Selected Plot:", plot);
              console.log("Form Data:", values);
              setSubmitted(true);
            }}
          >
            {({ setFieldValue, values }) => (
              <Form className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={16} />
                    <Field
                      name="name"
                      className="w-full pl-9 py-2 border rounded"
                      placeholder="Your full name"
                    />
                  </div>
                  <ErrorMessage name="name" component="p" className="text-red-500 text-xs mt-1" />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-400" size={16} />
                    <Field
                      name="phone"
                      className="w-full pl-9 py-2 border rounded"
                      placeholder="9876543210"
                    />
                  </div>
                  <ErrorMessage name="phone" component="p" className="text-red-500 text-xs mt-1" />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={16} />
                    <Field
                      name="email"
                      type="email"
                      className="w-full pl-9 py-2 border rounded"
                      placeholder="you@example.com"
                    />
                  </div>
                  <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1" />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Visit Date
                  </label>
                  <Field
                    type="date"
                    name="date"
                    className="w-full py-2 border rounded"
                  />
                  <ErrorMessage name="date" component="p" className="text-red-500 text-xs mt-1" />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Available Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        type="button"
                        key={slot.id}
                        onClick={() => setFieldValue("time", slot.id)}
                        className={`border p-2 rounded text-sm transition ${
                          values.time === slot.id
                            ? "bg-green-700 text-white"
                            : "bg-white"
                        }`}
                      >
                        {slot.label}
                      </button>
                    ))}
                  </div>
                  <ErrorMessage name="time" component="p" className="text-red-500 text-xs mt-1" />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400" size={16} />
                    <Field
                      as="textarea"
                      name="address"
                      rows="3"
                      className="w-full pl-9 py-2 border rounded"
                      placeholder="Your address"
                    />
                  </div>
                  <ErrorMessage name="address" component="p" className="text-red-500 text-xs mt-1" />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </section>
  );
}