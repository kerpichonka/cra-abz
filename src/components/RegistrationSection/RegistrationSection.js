import React, { useEffect, useState } from 'react';
import testApi from '../../api/testApi';
import { validateName, validateEmail, validateFile, validatePhone } from '../../services/validationService'

import classNames from 'classnames';
import './RegistrationSection.scss';

export const RegistrationSection = ({ addUser }) => {
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const [file, setFile] = useState(null)
  const [isFileValid, setIsFileValid] = useState(true);

  const [positions, setPosition] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(0);
  
  const [isFormDirty, setIsFormDirty] = useState(false)

  useEffect(() => {
    testApi.getPositions()
      .then(({data}) => {
        setPosition(data.positions)
        setSelectedPosition(data.positions[0].id)
      })
  }, []);
  
  const registerUser = async (event) => {
    event.preventDefault();

    setIsFormDirty(true)

    const validName = validateName(name)
    setIsNameValid(validName);

    const validEmail = validateEmail(email)
    setIsEmailValid(validEmail);

    const validPhone = validatePhone(phone)
    setIsPhoneValid(validPhone);

    const validFile = await validateFile(file)
    setIsFileValid(validFile);

    if (!validName || !validEmail || !validPhone || !validFile)
      return;

    const token = await testApi.getToken()

    const user = {
      name,
      email,
      phone,
      photo: file,
      position: selectedPosition
    }

    testApi.registerUser({token, user}).then(response => {
      console.log(user);
      console.log(response);
      // addUser(response);

      
    })
   
    // const user = {
    //   name,
    //   email,
    //   phone,
    //   file,
    //   position: selectedPosition
    // }

    // testApi.registerUser({token, user})
  }

  return (
    <section className="registration" id="registration">
      <h2 className="registration__title">Register to get a work</h2>
      <p className="registration__mark">
        Attention! After succesful registration and alert, update
        the list of users in the block from the top
      </p>
      <form className="registration__form" onSubmit={registerUser}>

        <label htmlFor="name">Name</label>
        <input 
          type="text"
          id="name"
          name="name"
          className={classNames({"input--error": !isNameValid})}
          value={name}
          placeholder="Your name"
          onChange={(event) => {
            setName(event.target.value)

            if (isFormDirty)
              setIsNameValid(validateName(event.target.value));

          }}
        />
        {!isNameValid && <p>Error</p>}

        <label htmlFor="email">Email</label>
        <input 
          type="text"
          name="email"
          id="email"
          placeholder="Your email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            
            if(isFormDirty) {
              setIsEmailValid(validateEmail(event.target.value))
            }
          }}
        />
        {!isEmailValid && <p>Error</p>}


        <label htmlFor="phone">Phone number</label>
        <input 
          type="text"
          name="phone"
          id="phone"
          value={phone}
          placeholder="+380 XX XXX XX XX"
          onChange={(event) => {
            setPhone(event.target.value);

            if(isFormDirty) {
              setIsPhoneValid(validatePhone(event.target.value))
            }
          }}
        />

        <p><small>Enter a phone number in international format</small></p>
        {!isPhoneValid && <p>Error</p>}

        <p>Select your position</p>
        {positions.length > 0 && positions.map(position => (
          <label key={position.id} htmlFor={position.id}>
            <input 
              type="radio" 
              id={position.id} 
              name="position" 
              checked={selectedPosition === position.id}
              onChange={() => {
                setSelectedPosition(position.id);
              }}
            />
            {position.name}
          </label>
        ))}
        
        <p>Photo</p>
        <div className="file">
          <label className="file-label">
            <input 
              className="file-input" 
              type="file" 
              accept="image/png, image/jpeg" 
              onChange={async (event) => {
                const file = event.target.files[0]

                if (file)
                  setFile(file)
                
                if (isFormDirty) {
                  setIsFileValid(await validateFile(file))
                }
              }}
            />
            <span className="file-name">{file? file.name : 'Upload your photo'}</span>
            <span className="file-cta"> Browse </span>
          </label>
        </div>
        {!isFileValid && <p>Error</p>}

        <button type="submit" className="registration__button">Sign up now</button>
      </form>
    </section>);
}


/*

  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);

    axios
      .post(UPLOAD_URL, formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };

*/