// Modal.js
import React from 'react';

const AddModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
            <div className="relative bg-white p-8 w-96 rounded-lg">
                {/* Close button */}
                <button className="absolute top-0 right-0 p-2" onClick={onClose}>
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                {/* Modal content */}
                {children}
            </div>
        </div>
    );
};

export default AddModal;
