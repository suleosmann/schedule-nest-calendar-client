import React, { useState, useEffect } from "react";
import useAxiosPrivate from "./../../hooks/useAxiosPrivate";

export default function VeiwProfile() {
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const controller = new AbortController();

    const fetchProfile = async () => {
      try {
        // Retrieve access token from local storage
        const accessToken = localStorage.getItem("accessToken");

        console.log("Access Token:", accessToken);


        // Send request to /users/user_info with access token in the authorization header
        const userInfoResponse = await axiosPrivate.get("/users/user_info", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          signal: controller.signal,
        });

        console.log("User Info:", userInfoResponse.data);
        // Update state or perform any other action with the user info
      } catch (error) {
        console.error("Error fetching User Profile:", error);
        // Handle error and navigate if needed
      }
    };

    fetchProfile();

    return () => {
      controller.abort();
    };
  }, [axiosPrivate]);

  return <>{/* Your JSX content */}</>;
}
