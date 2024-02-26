import React, { useState, useRef } from 'react';
import useAxiosPrivate from './../../hooks/useAxiosPrivate';
import useNavigation from '../../hooks/useNavigation';

function SuccessMessage({ message, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center successMessage">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
        <p>{message}</p>
        <button
          onClick={onClose}
          className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
        >
          OK
        </button>
      </div>
    </div>
  );
}

function EditModal({ closeModal, userInfo }) {
  const PROFILE_URL = '/users/edit_user';
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigation();

  const [name, setName] = useState(userInfo?.name || '');
  const [about, setAbout] = useState(userInfo?.about || '');
  const [phone, setPhone] = useState(userInfo?.phone || '');
  const [profession, setProfession] = useState(userInfo?.profession || '');
  const [errMsg, setErrMsg] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSave = async () => {
    try {
      // Directly retrieve the accessToken from localStorage
      const accessToken = localStorage.getItem("accessToken");
  
      // Include the Authorization header manually in the request
      const response = await axiosPrivate.patch(PROFILE_URL, JSON.stringify({ name, about, phone, profession }), {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}` // Manually include the accessToken
        },
      });
  
      console.log("Profile update response:", response.data);
      setShowSuccessMessage(true); // Show success message upon successful update
  
      // Automatically close the modal and navigate after showing the success message
      setTimeout(() => {
        closeModal();
        navigate('/dashboard/profile'); // Adjust navigation as necessary
      }, 2000); // Adjust timing as necessary
  
    } catch (err) {
      setErrMsg('Update Failed. Please try again.');
      console.error("Update error:", err);
    }
  };
  

  return (
    <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-center editModal" onClick={(e) => e.stopPropagation()}>
        <div className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg">
          {errMsg && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4" aria-live="assertive">
              {errMsg}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Phone Number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profession" className="block text-gray-700 text-sm font-bold mb-2">Profession</label>
            <input
              type="text"
              id="profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Profession"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="about" className="block text-gray-700 text-sm font-bold mb-2">About</label>
            <textarea
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tell us about yourself"
              rows="3"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      {showSuccessMessage && <SuccessMessage message="Profile successfully updated!" onClose={() => setShowSuccessMessage(false)} />}
    </>
  );
}

export default EditModal;
