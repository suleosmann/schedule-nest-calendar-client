import React, { useState } from 'react';
import useAxiosPrivate from './../../hooks/useAxiosPrivate';
import useNavigation from '../../hooks/useNavigation'

// Define a functional component called editModal which accepts two props: closeModal and saveEvent
function editModal({ closeModal, saveEvent }) {
  // State variables to hold the form inputs
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PROFILE_URL = '/users/edit_user';

  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigation(); // Use the custom hook
  
  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [about, setAbout] = useState('');
  const [phone, setPhone] = useState('');

  const [profession, setProfession] = useState('');
  const [validProfession, setValidProfession] = useState(false);
  const [profFocus, setProfFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  
  const nameRef = useRef();
  const errRef = useRef();

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(name));
    }, [name]);

    useEffect(() => {
        setValidProfession( USER_REGEX.test(profession));
    }, [profession]);

    useEffect(() => {
        setErrMsg('');
    }, [name, profession]);


  // Function to handle saving the event
  const handleSave = () => {
        e.preventDefault();

        useEffect(() => {
          const controller = new AbortController();

          const v1 = USER_REGEX.test(name);
          const v2 = USER_REGEX.test(profession);
          if (!v1 || !v2 ) {
              setErrMsg("Invalid Entry");
              return;
          }
          console.log("Sending sign-up request with data:", { name, profession, phone, about });

          const fetchProfile = async () => {
            const accessToken = localStorage.getItem("accessToken");
            try {
              const response = await axiosPrivate.post(PROFILE_URL,
                    JSON.stringify({  name, profession, phone, about  }),
                    {
                        headers: { 
                          Authorization: `Bearer ${accessToken}`,
                          'Content-Type': 'application/json' 
                        },
                    }
                );
                console.log(JSON.stringify(response?.data));
                setSuccess(true);
                setName('');
                setProfession('');
                setPhone('');
                setAbout('');
            } catch (err) {
                if (!err?.response) {
                    setErrMsg('No Server Response');
                }  else {
                    setErrMsg('Update Failed')
                }
                errRef.current.focus();
            }
          };

          fetchProfile()

          return () => {
            controller.abort();
          };

        }, [axiosPrivate]);


    closeModal();
  };

  return (
    <>
    {success ? 
      navigate('/dashboard/profile')

    :(
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-start md:items-center pt-10 md:pt-0" onClick={closeModal}>
      {/* Modal content */}
      <div className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg" onClick={e => e.stopPropagation()}>
        <div className="mb-4">
          {/* Input field for event title */}
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <label htmlFor="eventTitle" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            ref={nameRef}
            autoComplete="off"
            required
            aria-invalid={validName ? "false" : "true"}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your Name"
          />
          <p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.<br />
              Must begin with a letter.<br />
              Letters, numbers, underscores, hyphens allowed.
          </p>
        </div>
        <div className="mb-4">
          {/* Input field for event title */}
          <label htmlFor="eventTitle" className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input
            type="integer"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your Phone Number"
          />
        </div>
        <div className="mb-4">
          {/* Input field for event title */}
          <label htmlFor="eventTitle" className="block text-gray-700 text-sm font-bold mb-2">
            Profession
          </label>
          <input
            type="text"
            id="Profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            autoComplete="off"
            required
            aria-invalid={validProfession ? "false" : "true"}
            onFocus={() => setProfFocus(true)}
            onBlur={() => setProfFocus(false)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your Profession"
          />
          <p id="uidnote" className={profFocus && name && !validName ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.<br />
            Must begin with a letter.<br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
        </div>
        {/* Grid layout for date and time inputs */}
        <div className="mb-6">
          {/* Textarea for event notes */}
          <label htmlFor="eventNotes" className="block text-gray-700 text-sm font-bold mb-2">
            Write something about yourself...
          </label>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            autoComplete="off"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your details..."
            rows="4"
          ></textarea>
        </div>
        {/* Buttons for saving and canceling */}
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
      
    ) }
    </>
    
  );
}

// Export the editModal component as default
export default editModal;
