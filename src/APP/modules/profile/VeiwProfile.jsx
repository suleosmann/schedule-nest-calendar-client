import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import DeleteModal from "./DeleteModal"; // Ensure this import is correct
import EditProfile from "./EditProfile"; // Ensure this import is correct
import SuleImage from "../../assets/sule.jpg";
import BackgroundImage from "../../assets/calendar_image.jpg";

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
          <section
            className="flex h-full py-56 w-full bottom-0 right-0 bg-gray-200"
            style={{
              zIndex: 0,
              background: "linear-gradient(to bottom, #f0f0f0, #5bc647)", // Replace these colors with your desired gradient
            }}
          >
            <div className="container flex mx-24 mt-44 pt-12">
              <div className="relative flex flex-col min-w-1 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-72 pt-12">
                <div className="px-36">
                  <div className="flex flex-wrap justify-center">
                    {/* Profile Picture Section */}
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          src={SuleImage} // image URL
                          alt="Profile picture"
                          className="shadow-xl rounded-full h-auto align-botttom border-opacity-100 absolute lg:-ml-16 w-32 h-32"
                          style={{ maxWidth: "150px" }}
                        />
                      </div>
                    </div>

                    {/*Button Section */}
                    <div className="w-full lg:w-4/6 px-0 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-18 mt-3 sm:mt-0">
                        <button
                          className="bg-green-500 active:bg-green-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none focus:ring focus:ring-green-900 sm:mr-2 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => setShowEditProfileModal(true)}
                        >
                          Edit Profile
                        </button>
                        <button
                          className="bg-red-500 active:bg-orange-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none focus:ring focus:ring-green-900 sm:mr-2 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => setShowDeleteModal(true)}
                        >
                          Delete Account
                        </button>
                      </div>
                    </div>

                    {/* Card Section */}
                    <div className="w-full lg:w-9/12 px-4 lg:order-1 ">
                      <div className="text-center mt-12">
                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                          {userInfo.name}
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                          <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                          {userInfo.profession}
                        </div>
                        <div className="mt-10 py-4 bg-white border rounded-lg shadow-md ">
                          <div className="text-center">
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
                      </div>
                      <div className="mt-10 py-10 border-t border-gray-300 text-center">
                        <div className="mt-6 py-6 bg-white border rounded-lg shadow-md">
                          <div className="text-center">
                            <div className="flex flex-wrap justify-center">
                              <div className="w-full lg:w-9/12 px-4">
                                <h4 className="mb-4 leading-relaxed text-grey-900 font-bold text-3xl">
                                  About
                                </h4>

                                <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                  {userInfo.about}
                                </p>

                                <a
                                  href="#pablo"
                                  className="font-normal text-pink-500"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Show more
                                </a>
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
          </section>
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
