import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import DeleteModal from "./DeleteModal"; // Ensure this import is correct
import EditProfile from "./EditProfile"; // Ensure this import is correct
import SuleImage from "../../assets/sule.jpg";
import BackgroundImage from "../../assets/calendar_image.jpg";
import calenderbg from "../../assets/calendarbg.jpg"
import openpeeps from "../../assets/openpeeps.png";

export default function ViewProfile() {
  const axiosPrivate = useAxiosPrivate();
  const [userInfo, setUserInfo] = useState();
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control the visibility of DeleteModal
  const [showEditProfileModal, setShowEditProfileModal] = useState(false); // State to control the visibility of EditProfile

  useEffect(() => {
    const controller = new AbortController();
    const fetchProfile = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const userInfoResponse = await axiosPrivate.get("/users/user_info", {
          headers: { Authorization: `Bearer ${accessToken}` },
          signal: controller.signal,
        });
        setUserInfo(userInfoResponse.data);
      } catch (error) {
        console.error("Error fetching User Profile:", error);
      }
    };
    fetchProfile();
    return () => controller.abort();
  }, [axiosPrivate]);

  // Function to be called when the delete action is confirmed
  const handleDelete = () => {
    setShowDeleteModal(false);
  };

  const handleUpdateProfile = (updatedInfo) => {
    setShowEditProfileModal(false);
  };

  return (
    <>
      {userInfo && (
        <>
          <div className="pl-0 md:pl-4 transition-all w-full">
            <div className="p-4 h-64 w-full ">
              <div className = "relative w-full h-4  scale-y-25 scale-x-95 ">
              <img src={BackgroundImage} className="w-full h-64 object-cover rounded-lg " alt="bg picture"/>
              </div>
              <div style={{  background: "linear-gradient(to bottom, rgba(240, 240, 240, 0.5), rgba(91, 198, 71, 0.5))" }} 
              className="relative rounded-lg shadow-xl absolute top-64 mx-2 ml-5 left-1/2 px-36 transform -translate-x-1/2">
              <img
                  src={openpeeps} 
                  alt="Profile picture"
                  className="py-2 shadow-xl rounded-full border-opacity-100 w-32 h-32"      
                    />
                  <div >
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                   {userInfo.name}
                 </h3>
                 <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                   <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                   {userInfo.profession}
                 </div>
                 <div className="w-full scale-x-100 lg:w-4/6 px-0 lg:order-3 lg:text-right lg:self-center">
                      <div className="flex py-6 px-18 mt-3 sm:mt-0">
                        <button
                          className=" bg-green-400 hover:bg-orange-400 active:bg-orange-600 focus:outline-none focus:ring focus:ring-green-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded border border-gray-500 hover:border-transparent rounded focus:outline-none focus:shadow-outline sm:mr-2 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => setShowEditProfileModal(true)}
                        >
                          Edit Profile
                        </button>
                        <button
                          className="bg-orange-500 hover:bg-red-400 active:bg-red-600 focus:outline-none focus:ring focus:ring-green-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded border border-gray-500 hover:border-transparent rounded focus:outline-none focus:shadow-outline sm:mr-2 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => setShowDeleteModal(true)}
                        >
                          Delete Account
                        </button>
                      </div>
                      <div className="mt-10 py-4  border rounded-lg shadow-md ">
                          <div className="text-left ml-3">
                            <h4 className="mb-4 leading-relaxed text-grey-900 font-bold text-3xl">
                              Contact Details
                            </h4>
                            <div className="text-gray-700">
                              <div className="mb-2 text-gray-700 mt-5">
                                <i className="mb-4 text-lg leading-relaxed text-gray-800"></i>
                                {userInfo.email}
                              </div>
                              <div className="mb-2 text-gray-700">
                                <i className="mb-4 text-lg leading-relaxed text-gray-800"></i>
                                {userInfo.phone_number}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-gray-500 text-center">
                        <div className="mt-6 py-6 border rounded-lg shadow-md">
                          <div className="">
                            <div className="flex flex-wrap ">
                              <div className="w-full text-left ml-3 lg:w-9/12 px-4">
                                <h4 className="mb-4 leading-relaxed text-grey-900 font-bold text-3xl">
                                  About
                                </h4>
                                <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                  {userInfo.about}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
              </div>
            </div>
          </div>
          {showEditProfileModal && (
            <EditProfile
              userInfo={userInfo}
              closeModal={() => setShowEditProfileModal(false)}
              saveProfile={handleUpdateProfile}
            />
          )}
          {showDeleteModal && (
            <DeleteModal
              userInfo={userInfo}
              message="This action will delete your account!"
              closeModal={() => setShowDeleteModal(false)}
              onDelete={handleDelete} // Pass the handleDelete function
            />
          )}
        </>
      )}
    </>
  );
}
