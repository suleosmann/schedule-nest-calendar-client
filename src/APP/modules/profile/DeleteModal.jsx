import React from 'react';
import useAxiosPrivate from './../../hooks/useAxiosPrivate';
import useNavigation from '../../hooks/useNavigation'
///  option to delete

function DeleteModal({ type, message, closeModal }) {
  let bgColor;
  if (type === 'delete') {
    bgColor = 'bg-red-100';
  } else {
    bgColor = 'bg-gray-100';
  }

  const DELETE_PROFILE_URL = '/users/edit_user';

  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigation(); 

  const handledelete = () => {
    e.preventDefault();

        useEffect(() => {
          const controller = new AbortController();

          const deleteProfile = async () => {
            const accessToken = localStorage.getItem("accessToken");
            try {
              const response = await axiosPrivate.delete(DELETE_PROFILE_URL,
                    {
                        headers: { 
                          Authorization: `Bearer ${accessToken}`,
                          'Content-Type': 'application/json' 
                        },
                    }
                );
                console.log(JSON.stringify(response?.data));
                setSuccess(true);
            } catch (err) {
                if (!err?.response) {
                    setErrMsg('No Server Response');
                }  else {
                    setErrMsg('Update Failed')
                }
                errRef.current.focus();
            }
          };

          deleteProfile()

          return () => {
            controller.abort();
          };

        }, [axiosPrivate]);
    closeModal();
  };

  return (
    <>
    {
      success ? 
      navigate('/')

      :(
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-start md:items-center pt-10 md:pt-0" onClick={closeModal}>
        <div className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg" onClick={e => e.stopPropagation()}>
          <div className={`px-4 py-2 rounded-md ${bgColor}`}>
            {message}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handledelete}
            >
              Delete
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
      )
    }
    </>
    
  );
}

export default DeleteModal;

// exammple usage
// <EventDetailsModal type="delete" message="Are you sure you want to delete your account?" />
// <EventDetailsModal type="notification" message="Profile has been updated successfully" />
// <EventDetailsModal type="info" message="Please review your submission." />
