import React from 'react';
import useAxiosPrivate from './../../hooks/useAxiosPrivate';
import useNavigation from '../../hooks/useNavigation';

function DeleteModal({ message, closeModal }) {
  const bgColor = 'bg-red-100'; // assuming delete type only for simplicity
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigation(); 

  const handleDelete = async () => {
    try {
      // Retrieve access token from local storage
      const accessToken = localStorage.getItem("accessToken");

      // Send DELETE request with the accessToken in the header
      const response = await axiosPrivate.delete('/users/delete_user', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      console.log(response?.data);
      // Navigate to the login or home page after successful deletion
      navigate('/');
    } catch (err) {
      console.error('Deletion failed:', err.response || err);
      // Handle error, possibly update state with the error message
    }
    // Always close the modal
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-center" onClick={closeModal}>
      <div className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg" onClick={(e) => e.stopPropagation()}>
        <div className={`px-4 py-2 rounded-md ${bgColor} text-center mb-4`}>
          {message}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            type="button"
            onClick={handleDelete}
          >
            Confirm Delete
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
