import React, { useState, useEffect } from "react";
import Select from "react-select";
import useAxios from "./../../api/axios";

const SearchCalendar = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [selectedId, setSelectedId] = useState();
  const [expirationTime, setExpirationTime] = useState(""); // New state for expiration time

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await useAxios.get("/users/get_all_users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching Users", error);
        // Handle error and navigate if needed
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (selectedOption) => {
    setSelectedUser(selectedOption);
    setSelectedId(selectedOption.value);
    setSelectedUserName(selectedOption.label);
  };

  const handleSend = async () => {
    if (selectedUser) {
      const accessToken = localStorage.getItem("accessToken");
      const userId = selectedUser.value;

      try {
        const formattedExpirationTime = expirationTime.replace("T", " ") + ":00"; // Format the expiration time
        const response = await useAxios.post(
          "/calendar/share_calendar",
          {
            access_granted_to_id: selectedUser.value,
            user_id: userId,
            expiration_time: formattedExpirationTime,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log("Response:", response.data);
        console.log(userId);
        // Handle success response
        setSelectedUser(null);
        setSelectedUserName("");
        setSelectedId(null);
        setExpirationTime(""); // Reset expiration time
      } catch (error) {
        console.error("Error sharing calendar:", error);
        // Handle error response
      }
    } else {
      console.error("No user selected");
    }
  };
  
  const handleClear = () => {
    setSelectedUser(null);
    setSelectedUserName("");
    setSelectedId(null);
    setExpirationTime(""); // Clear expiration time when clearing selection
  };

  return (
    <div>
      Enter Name
      <Select
        value={selectedUser}
        onChange={handleChange}
        options={users.map((user) => ({ value: user.id, label: user.name }))}
        placeholder="  Name..."
        className=" pb-6 shadow appearance-none  w-full py-2 px-1   "
      />
      Expiry Time
      <input
      type="datetime-local"
      value={expirationTime}
      onChange={(e) => setExpirationTime(e.target.value)}
      className="shadow appearance-none border rounded w-full mt-2 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
      <div className="mt-7">
        <button
          onClick={handleSend}
          className="mr-2 bg-green-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900 hover:shadow-md shadow border border-gray-500 hover:border-transparent rounded focus:outline-none focus:shadow-outline hover:text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
        <button onClick={handleClear} className="bg-yellow-300 hover:bg-red-400 active:bg-red-600 focus:outline-none focus:ring focus:ring-green-900 hover:shadow-md shadow border border-gray-500 hover:border-transparent rounded focus:outline-none focus:shadow-outline hover:text-white font-bold py-2 px-4 rounded">
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchCalendar;
