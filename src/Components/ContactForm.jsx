import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from './Header';
import Modal from './Modal';
import { useState } from 'react';

const ContactForm = () => {

    const [showModal, setShowModal] = useState(false);

    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        // console.log(values);
        const { name, email, message } = values;
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        resetForm();
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <Header />
            {showModal && <Modal onClose={closeModal} />}
            <div className="max-w-md mx-auto p-6 bg-transparent rounded-md">
                <h2 className="text-white text-2xl font-semibold mb-6 text-center">Contact</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-white">Name</label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-white">Email</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-white">Message</label>
                            <Field
                                as="textarea"
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                                rows="4"
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500" />
                        </div>

                        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default ContactForm;
