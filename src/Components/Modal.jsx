import React from 'react';

const Modal = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="p-8 rounded-md text-center">
                <h2 className="text-2xl font-semibold mb-4 text-white">Success!</h2>
                <p className='text-white'>Your message has been sent successfully.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-center mx-auto" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
