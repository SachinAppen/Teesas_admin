// Modal.js
import React from 'react';

const Modal2 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-64">
        <ul>
          <li className="mb-2 cursor-pointer hover:text-gray-700">Launch Class</li>
          <li className="mb-2 cursor-pointer hover:text-gray-700">Edit</li>
          <li className="mb-2 flex items-center justify-between cursor-pointer hover:text-gray-700">
            <span>Published</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>
          <li className="cursor-pointer text-red-600 hover:text-red-800">Delete Class</li>
        </ul>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal2;
