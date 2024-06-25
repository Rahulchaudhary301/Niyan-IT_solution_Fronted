import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactimg from '../image/contactimg.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { FaMailBulk } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function ContactsUs() {
    const navigation=useNavigate()


    const [submitStatus, setSubmitStatus] = useState('Submit')

    const [formData, setFormData] = useState({
        name:'',
        email: '',
        contactNumber: '',
        services: '',
        message: ''
    });

const navigate=useNavigate()

    const DisebleButton = () => {
        document.getElementById("myButton").classList.add("inactive");
    }



    const ShowButton = () => {
        document.getElementById("myButton").disabled = false;
        document.getElementById("myButton").classList.remove("inactive");
    }



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Rahul")

       // const port = 'https://jsfoods.onrender.com/form'
         const port='https://niyan-it-solution-server.onrender.com/form'

        const validationResult = isFormValid();
        if (!validationResult.isValid) {
            toast.error("Form is not valid");
            // console.log("Form is not valid");
            return; // Stop further execution if form is not valid
        }

        setSubmitStatus("Sending...")
        DisebleButton()

        axios.post(port, formData)
            .then(response => {
                // console.log('Form submitted successfully:', response);
                setSubmitStatus("Send")
                ShowButton()
                toast.success("Form submitted successfully");
                setFormData({
                    name:'',
                    email: '',
                    contactNumber: '',
                    services: '',
                    message: ''
                });
                setSubmitStatus("Submit")
                // navigate('/Enquiry')
            })
            .catch(error => {
                // console.error('Error submitting form:', error);
                toast.error("Error submitting form");

            });
    };



    const isFormValid = () => {
        if (
            formData.name.trim() === '' ||
            formData.email.trim() === '' ||
            formData.contactNumber.trim() === '' ||
            formData.services.trim() === '' ||
            formData.message.trim() === ''
        ) {
            toast.error("All fields are required");
            return { isValid: false };
        }

        // Check if contact number is a valid number
        if (isNaN(formData.contactNumber) || formData.contactNumber.length !== 10) {
            toast.error("Contact number must be a valid 10-digit number.");
            return { isValid: false };
        }

        // You can add more validation rules here

        return { isValid: true };
    };


    return (
        <div>
            <div className="contact-body">
                <div className="contact-container">
                    <div className="contact-section1">
                        <div className="contact-imgBox">
                            <img src={contactimg}></img>
                        </div>
                        
                        <div className="contact-head">
                            <h1>Contact</h1>
                            <p><span  onClick={()=>navigation('/')} className='hb'>Home</span> <FaArrowRight/> Contact</p>
                        </div>
                    </div>

                    <div className="contact-head-data">

                        <div className="contact-head-data">
                            <div className="contact-head-data-s1-data1">
                                <h3>Contact us</h3>
                                <h1>Grow Your Business With <span>Our Expertise</span></h1>
                            </div>

                            <div className="contact-head-data-s2-data2">
                                <p>We understand the importance of approaching each work integrally and believe in the power of simple.</p>
                            </div>
                        </div>
                    </div>


                    <div className="Contact-box-data-body">
                        <div className="Contact-data-box-section1">
                            <div className="contact-box">
                                <div className="contact-icon">
                                    <FaLocationDot className='iconslogo' />
                                </div>
                                <div className="contact-add-box">
                                    <h2>Bangalore</h2>
                                    <p> 2nd floor, No, Royal Arcade, 60, 17th Cross Road, Sector 6, HSR Layout Bengaluru, Karnataka-560102</p>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="contact-icon">
                                    <IoMdMailUnread className='iconslogo' />
                                </div>
                                <div className="contact-add-box">
                                    <h2>Niyan IT Solutions</h2>
                                    <p>niyanitsolutions.com </p>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="contact-icon">
                                    <IoCall className='iconslogo' />
                                </div>
                                <div className="contact-add-box">
                                    <h2>Call Us</h2>
                                    <p>+91 9741510789</p>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="contact-icon">
                                    <FaMailBulk className='iconslogo' />
                                </div>
                                <div className="contact-add-box">
                                    <h2>Niyan IT Solutions</h2>
                                    <p>niyanitsolutions.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-input-body">

                            <form onSubmit={handleSubmit} className="contact-input-container">

                                <div className="contact-input-body-data">
                                    <div className="inputname">
                                        <div className="nnnn">
                                            <label for="name">Name:</label>
                                            <input type="text"
                                                className="inputt"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required />
                                        </div>
                                        <div className="eeee">
                                            <label for="email">Email:</label>
                                            <input   type="email"
                                                className="inputt"       
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required  />
                                        </div>
                                    </div>


                                    <div className="inputname">
                                        <div className="nnnn">
                                            <label for="phone">Phone:</label>
                                            <input  className="inputt"
                                                type="tel"
                                                id="contactNumber"
                                                name="contactNumber"
                                                value={formData.contactNumber}
                                                onChange={handleChange}
                                                required />
                                        </div>
                                        <div className="eeee">
                                            <label for="services">Services:</label>
                                            <input  className="inputt"
                                                type="text"
                                                id="services"
                                                name="services"
                                                value={formData.services}
                                                onChange={handleChange}
                                                required />
                                        </div>
                                    </div>


                                    <label className='mess' for="message">Message:</label>
                                    <textarea id="message" name="message" required onChange={handleChange} value={formData.message}></textarea>

                                    <button id='myButton' type="submit" className='submitbut'>{submitStatus}</button>
                                    
                                </div>
                                <ToastContainer />
                            </form>
                        </div>
                    </div>
                </div>
               
            </div>
           
        </div>
    )
}
