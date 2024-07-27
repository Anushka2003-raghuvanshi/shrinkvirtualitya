import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';



export default function Loweranimation(props) {
  const [mode, setMode] = useState({
    backgroundColor: 'white',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  
  useEffect(() => {
    if (props.mode === 'white') {
     
      setMode({
        backgroundColor: 'white',
        height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
     
      });
    } else {
    
      setMode({
        backgroundColor: 'grey',
        height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
      
      });
    }
   

    
  }, [props.mode],);

  useEffect(() => {
    if (props.color === 'pink') {
     
      setMode({
        backgroundColor: 'pink',
        height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
     
      });
    } else  if(props.color=='green'){
    
      setMode({
        backgroundColor: 'green',
        height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
      
      });
    }
      else  if(props.color=='yellow'){
    
        setMode({
          backgroundColor: 'yellow',
          height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
        
        });

    }
   

    
  }, [props.color]);

  const [text, setText] = useState("Enter the email");
  const [password, setPassword] = useState("****");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission if needed
  };

 

  const buttonStyle = {
    width: '150px',
    height: '50px',
    backgroundColor: 'black',
    color: 'white',
    margin: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '20px', // Add some margin to separate buttons from form
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const formStyle = {
    border: '4px solid black',
    margin: '2px',
    padding: '10px',
    borderRadius: '10px',
  };

  return (
    <div style={mode}>
      <div style={contentContainerStyle}>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle}>Shopping</button>
          <button style={buttonStyle}>Education</button>
          <button style={buttonStyle}>Entertainment</button>
          <button style={buttonStyle}>Others</button>
        </div>
        <div style={formStyle}>
          <form style={{ width: '300px' }} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" onChange={handleOnChange} className="form-control" id="exampleInputEmail1" value={text} aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" onChange={handlePassword} className="form-control" value={password} id="exampleInputPassword1"/>
            </div>
            <button style={buttonStyle} type="submit">Submit</button>
          </form>
        </div>
       
      </div>
    </div>
  );
}

Loweranimation.propTypes = {
  mode: PropTypes.string,
};
