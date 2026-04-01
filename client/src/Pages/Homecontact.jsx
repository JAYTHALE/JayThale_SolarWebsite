import { Mail, MapPin, Headphones, Zap, Facebook, Twitter, Instagram } from "lucide-react";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import clsx from "clsx";

const Homecontact = () => {
    // ✅ Validation Schema
    const validationSchema = yup.object({
        name: yup.string().required("First name is required"),
        email: yup
            .string()
            .email("Invalid email address")
            .required("Email is required"),
        phone: yup
            .string()
            .matches(/^[7-9][0-9]{9}$/, "Enter a valid 10-digit Indian phone number")
            .required("Phone number is required"),
        message: yup.string().required("Message is required"),
    });

    // ✅ Formik Setup
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
            agree: false,
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log("Form submitted:", values);
            alert("Thank you! We'll get back to you soon.");
            resetForm();
        },
    });

    return (
        <>
            <section className="w-full bg-[#C9F31D] py-20 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start gap-12 text-black relative overflow-hidden z-10">
                {/* Left Side */}
                <div className="md:w-1/2 space-y-6">
                    <p className="flex items-center text-sm font-medium font-[Prompt] uppercase tracking-wider">
                        <Zap className="w-4 h-4 mr-2" /> Let’s Work Together
                    </p>

                    <h2 className="text-4xl md:text-5xl leading-tight font-medium font-[Prompt]">
                        Let’s Start Working <br /> Together Now
                    </h2>

                    <p className="text-gray-800 leading-relaxed font-medium font-[Prompt]">
                        Let’s create a sustainable future together.
                        Fill the form below and our solar team will reach you soon.
                    </p>

                    <div className="space-y-4">
                        <p className="flex items-center space-x-3 font-medium font-[Prompt]">
                            <MapPin className="w-5 h-5" />
                            <span>Chhatrapati Sambhaji Nagar - 431001</span>
                        </p>
                        <p className="flex items-center space-x-3 font-medium font-[Prompt]">
                            <Mail className="w-5 h-5" />
                            <span>Jaythale02@gmail.com</span>
                        </p>
                        <p className="flex items-center space-x-3 font-medium font-[Prompt]">
                            <Headphones className="w-5 h-5" />
                            <span>+91 7218143845</span>
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 pt-4">
                        <button className="border border-black rounded-full p-2 hover:bg-black hover:text-white transition">
                            <Facebook className="w-4 h-4" />
                        </button>
                        <button className="border border-black rounded-full p-2 hover:bg-black hover:text-white transition">
                            <Twitter className="w-4 h-4" />
                        </button>
                        <button className="border border-black rounded-full p-2 hover:bg-black hover:text-white transition">
                            <Instagram className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <form
                    onSubmit={formik.handleSubmit}
                    className="md:w-1/2 w-full space-y-4 mt-15"
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Name */}
                        <div className="w-full md:w-1/2">
                            <input
                                type="text"
                                name="name"
                                placeholder="First Name*"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                className={clsx(
                                    "w-full p-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none border",
                                    {
                                        "border-gray-300":
                                            !formik.touched.name ||
                                            !formik.errors.name,
                                        "border-red-500":
                                            formik.touched.name &&
                                            formik.errors.name,
                                        "border-green-500":
                                            formik.touched.name &&
                                            !formik.errors.name,
                                    }
                                )}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <p className="text-sm text-red-600 mt-1">
                                    {formik.errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="w-full md:w-1/2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address*"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className={clsx(
                                    "w-full p-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none border",
                                    {
                                        "border-gray-300":
                                            !formik.touched.email ||
                                            !formik.errors.email,
                                        "border-red-500":
                                            formik.touched.email &&
                                            formik.errors.email,
                                        "border-green-500":
                                            formik.touched.email &&
                                            !formik.errors.email,
                                    }
                                )}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-sm text-red-600 mt-1">
                                    {formik.errors.email}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            className={clsx(
                                "w-full p-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none border",
                                {
                                    "border-gray-300":
                                        !formik.touched.phone ||
                                        !formik.errors.phone,
                                    "border-red-500":
                                        formik.touched.phone &&
                                        formik.errors.phone,
                                    "border-green-500":
                                        formik.touched.phone &&
                                        !formik.errors.phone,
                                }
                            )}
                        />
                        {formik.touched.phone && formik.errors.phone && (
                            <p className="text-sm text-red-600 mt-1">
                                {formik.errors.phone}
                            </p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="How can we help you? Feel free to get in touch!"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                            className={clsx(
                                "w-full p-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none resize-none border",
                                {
                                    "border-gray-300":
                                        !formik.touched.message ||
                                        !formik.errors.message,
                                    "border-red-500":
                                        formik.touched.message &&
                                        formik.errors.message,
                                    "border-green-500":
                                        formik.touched.message &&
                                        !formik.errors.message,
                                }
                            )}
                        ></textarea>
                        {formik.touched.message && formik.errors.message && (
                            <p className="text-sm text-red-600 mt-1">
                                {formik.errors.message}
                            </p>
                        )}
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start space-x-2">
                        <input
                            type="checkbox"
                            name="agree"
                            onChange={formik.handleChange}
                            checked={formik.values.agree}
                            className="mt-1"
                        />
                        <p className="text-sm text-gray-800 font-medium font-[Prompt]">
                            By clicking Send a message button, you agree to use our “Form”
                            terms and consent cookie usage in browser.
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="font-[Prompt] bg-black text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
                    >
                        Send a Message
                    </button>
                </form>
            </section>
        </>
    );
};

export default Homecontact;
