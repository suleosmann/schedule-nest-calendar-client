  import React, { useState, useEffect } from "react";
  import Select from "react-select";
  import useAxios from "./../../api/axios";

  const SearchCalendar = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedUserName, setSelectedUserName] = useState("");
    const [selectedId, setSelectedId] = useState();

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
          const response = await useAxios.post(
            "/calendar/share_calendar",
            {
              access_granted_to_id: selectedUser.value,
              user_id: userId,
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
    };

    return (
      <div>
        Share Calendar
        <Select
          value={selectedUser}
          onChange={handleChange}
          options={users.map((user) => ({ value: user.id, label: user.name }))}
          placeholder="Share your calendar..."
          className="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
        <button onClick={handleClear} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Clear
        </button>
      </div>
    );
  };

  export default SearchCalendar;
