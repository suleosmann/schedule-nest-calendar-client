import React from 'react';
import useAxiosPrivate from './../../hooks/useAxiosPrivate';
import useNavigation from '../../hooks/useNavigation';

function DeleteModal({ message,userInfo, closeModal }) {
  const bgColor = 'bg-red-100'; // assuming delete type only for simplicity
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigation(); 

  const handleDelete = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await axiosPrivate.delete('/users/delete_user', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      console.log(response?.data);
      navigate('/');
    } catch (err) {
      console.error('Deletion failed:', err.response || err);
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-center" onClick={closeModal}>
      <div className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg" onClick={(e) => e.stopPropagation()}>
        <div  className='float-right border border-gray-400 rounded-full h-6 w-6 items-center justify-center cursor-pointer ' onClick={closeModal}>
          <p className=' text-gray-900 text-center'> x </p>
        </div>
        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center"  id="modal-title">
          {userInfo.name}
        </h3>
        <div className='border border-gray-300 mt-4 mb-8'></div>
        <div className={`px-4 py-2 rounded-md text-center  mb-4 ${bgColor}`}>
         <p>{message}</p> 
         <p>Confirm ?</p>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-gray-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            type="button"
            onClick={handleDelete}
          >
          Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
