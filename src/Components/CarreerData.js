import React, { useState } from 'react';
import ico from '../image/sidepic.png';
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosCloudDone } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function CarreerData() {
    const DisebleButton = () => {
        document.getElementById("myButton").classList.add("inactive");
    };

    const ShowButton = () => {
        document.getElementById("myButton").disabled = false;
        document.getElementById("myButton").classList.remove("inactive");
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        message: '',
        cv: null
    });

    const [file, setFile] = useState(null);
    const [submitStatus, setSubmitStatus] = useState('Submit');
    const [fileSelected, setFileSelected] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setFileSelected(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationResult = isFormValid();
        if (!validationResult.isValid) {
            toast.error("Form is not valid");
            return;
        }

        if (file.size > 1024 * 1024 * 1) { // 1 MB limit
            setFileSelected(false);
            return toast.error('File size exceeds the limit (1MB).');
        }

        const data = new FormData();
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        data.append('email', formData.email);
        data.append('position', formData.position);
        data.append('message', formData.message);
        data.append('file', file);

        try {
            DisebleButton();
            const Port = 'https://niyan-it-solution-server.onrender.com/submit'
            // const Port='http://localhost:5000/submit'

            setSubmitStatus("Sending...");
            const response = await axios.post(Port, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);
            ShowButton();
            toast.success(response.data);
            setSubmitStatus("Submit");

            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                position: '',
                message: '',
                cv: null
            });
            setFile(null);
            setFileSelected(false);
            document.getElementById('cv').value = ''; // Clear file input

        } catch (error) {
            console.error('Error submitting the form', error);
        }
    };

    const isFormValid = () => {
        if (
            formData.firstName.trim() === '' ||
            formData.lastName.trim() === '' ||
            formData.email.trim() === '' ||
            formData.position.trim() === '' ||
            formData.message.trim() === ''
        ) {
            toast.error("All fields are required");
            return { isValid: false };
        }

        if (!fileSelected) {
            toast.error("Please select a CV/Resume");
            setFileSelected(false);
            return { isValid: false };
        }

        return { isValid: true };
    };

    const handleClick = () => {
        document.getElementById('cv').click();
    };

    return (
        <div className='career-box'>
            <div className="head-body">
                <div className="head-content">
                    <h1>Your next big Career move</h1>
                    <p>we're an innovative ,fast growing company -with all the opportunity for impact and career growth that comes with the territory , we,re always looking for passionate, curious and empathetic people to join our team.</p>
                </div>
            </div>
            <div className="filling-box">
                <div className="inquary-con">
                    <div className="inqiry-secton1">
                        <div className="pic-box">
                            <img src={ico} alt="Career Icon" />
                        </div>
                    </div>
                    <div className="inquary-section22">
                        <div className="enquary-conatniner">
                            <div className="contact-input-body-dataa">
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="inputname">
                                        <div className="nnn x">
                                            <label htmlFor="firstName">FIRST NAME:</label>
                                            <input className="inputt" type="text" id="firstName" name="firstName" required onChange={handleChange} value={formData.firstName} />
                                        </div>
                                        <div className="nnn x">
                                            <label htmlFor="lastName">LAST NAME:</label>
                                            <input className="inputt" type="text" id="lastName" name="lastName" required onChange={handleChange} value={formData.lastName} />
                                        </div>
                                    </div>

                                    <div className="inputname">
                                        <div className="nnn x">
                                            <label htmlFor="email">EMAIL ADDRESS:</label>
                                            <input className="inputt" type="email" id="email" name="email" required onChange={handleChange} value={formData.email} />
                                        </div>

                                        <div className="nnn x">
                                            <label htmlFor="position">POSITION APPLYING:</label>
                                            <input className="inputt" type="text" id="position" name="position" required onChange={handleChange} value={formData.position} />
                                        </div>

                                    </div>

                                    <div className="inputname">
                                        <div className="nnn y">
                                            <label className="mess" htmlFor="message">ADDITIONAL INFORMATION :</label>
                                            <textarea id="message" name="message" required onChange={handleChange} value={formData.message}></textarea>
                                        </div>
                                    </div>
                                    <div className="fileupload">
                                        <label htmlFor="cv">UPLOAD YOUR CV HERE:</label>
                                        <div className="upload-container" style={{ backgroundColor: fileSelected ? 'lightgreen' : 'white' }} onClick={handleClick}>
                                            <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" onChange={handleFileChange} style={{ display: 'none' }} />
                                            <div className="icc">
                                                {fileSelected ? (
                                                    <>
                                                        <IoIosCloudDone className='uplo' />
                                                        <h3>File selected</h3>
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaCloudUploadAlt className='uplo' />
                                                        <h3>Browse files</h3>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <button id="myButton" className="submitbut butcolu" type="submit">{submitStatus}</button>
                                </form>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
