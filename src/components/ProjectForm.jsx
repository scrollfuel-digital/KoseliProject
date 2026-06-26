import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Sprout,
  Check,
  IndianRupee,
  Ruler,
} from "lucide-react";
import { useState } from "react";
import { HiMapPin } from "react-icons/hi2";

/* ---------------- TIME SLOTS ---------------- */
const TIME_SLOTS = [
  { id: "morning", label: "Morning", range: "9 AM – 12 PM" },
  { id: "afternoon", label: "Afternoon", range: "12 PM – 4 PM" },
  { id: "evening", label: "Evening", range: "4 PM – 7 PM" },
];

/* ---------------- VALIDATION ---------------- */
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

/* ---------------- INPUT STYLE ---------------- */
const inputClass =
  "w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition";

/* ================= COMPONENT ================= */
export default function SiteVisitForm({ project }) {
  const [submitted, setSubmitted] = useState(false);

  /* 🛑 SAFETY GUARD — prevents crash */
  if (!project) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-start">
      {/* ================= LEFT INFO ================= */}
      <div className="py-2 md:py-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full mb-4">
          <Sprout size={12} /> Farm Plot
        </span>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {project.title}
        </h2>
        <p className="text-gray-600 mb-8 mt-5 text-bold ">{project.description}</p>
        <div className="flex items-center text-gray-500 mb-6 text-sm gap-1">
          <HiMapPin className="text-green-600" size={16} />
          <span>{project.location}</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-4">
            <div className="flex items-center gap-1.5 text-green-700 mb-1">
              <Ruler size={14} />
              <p className="text-xs font-semibold uppercase tracking-wide">
                Plot Size
              </p>
            </div>
            <p className="text-lg font-bold text-gray-900">{project.size}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-4">
            <div className="flex items-center gap-1.5 text-green-700 mb-1">
              <IndianRupee size={14} />
              <p className="text-xs font-semibold uppercase tracking-wide">
                Price
              </p>
            </div>
            <p className="text-lg font-bold text-green-700">
              {project.price}
            </p>
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            Key Features
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {project.features?.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-gray-700 bg-white border border-gray-100 rounded-lg px-3 py-2 shadow-sm"
              >
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Trust Badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {["RERA Approved", "Clear Title", "Ready to Register"].map(
            (badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 text-xs text-green-800 bg-green-100 px-2.5 py-1 rounded-full font-medium"
              >
                <Check size={10} /> {badge}
              </span>
            )
          )}
        </div>
      </div>

      {/* ================= RIGHT FORM ================= */}
      <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-100 rounded-2xl shadow-sm p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-green-700 mb-1">
          <Sprout size={13} /> Site Visit Request
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-5">
          Book a Free Site Visit
        </h2>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Request Submitted!
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              We'll contact you shortly to confirm your visit.
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
            onSubmit={async (values, { setSubmitting }) => {
              const payload = {
                ...values,
                projectTitle: project.title,
                projectLocation: project.location,
              };
              console.log("Site Visit Form Submitted:", payload);
              try {
                const res = await fetch("http://localhost:3000/api/site-visit", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });
                const data = await res.json();
                console.log("Site Visit Saved to DB:", data);
                setSubmitted(true);
              } catch (err) {
                console.error("Submission failed:", err);
                setSubmitted(true);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ setFieldValue, values }) => (
              <Form className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={15}
                    />
                    <Field
                      name="name"
                      className={inputClass}
                      placeholder="Your full name"
                    />
                  </div>
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={15}
                      />
                      <Field
                        name="phone"
                        className={inputClass}
                        placeholder="9876543210"
                      />
                    </div>
                    <ErrorMessage name="phone" component="p" className="text-red-500 text-xs mt-1" />
                  </div>

                  
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                    Visit Date
                  </label>
                  <Field
                    type="date"
                    name="date"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                  />
                  <ErrorMessage name="date" component="p" className="text-red-500 text-xs mt-1" />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        type="button"
                        key={slot.id}
                        onClick={() => setFieldValue("time", slot.id)}
                        className={`border rounded-lg py-2 text-xs font-semibold transition ${values.time === slot.id
                            ? "bg-green-600 border-green-600 text-white"
                            : "bg-white border-gray-200 text-gray-600"
                          }`}
                      >
                        <div>{slot.label}</div>
                        <div className="text-[10px] opacity-70">
                          {slot.range}
                        </div>
                      </button>
                    ))}
                  </div>
                  <ErrorMessage name="time" component="p" className="text-red-500 text-xs mt-1" />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin
                      className="absolute left-3 top-3 text-gray-400"
                      size={15}
                    />
                    <Field
                      as="textarea"
                      name="address"
                      rows="2"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition resize-none"
                      placeholder="Your address"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold text-sm transition"
                >
                  Book Site Visit →
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}