import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {
  const styleswitch = {
    height: '50px',
    backgroundColor: 'black',
    color: 'white',
  };

  const [text, setText] = useState("Enable dark mode");

  useEffect(() => {
    if (props.mode === 'dark') {
      setText("Enable White Mode");
    } else {
      setText("Enable Dark Mode");
    }
  }, [props.mode]);

  const handleOnChange = () => {
    props.toggleMode();
  };

  const styleTheme = {
    display: 'flex',
    flexDirection: 'row-reverse',
    float: 'right',
    gap: '10px',
    alignItems: 'center',
  };

  const handlePink = () => {
    props.colorHandle("pink");
  };

  const handleGreen = () => {
    props.colorHandle("green");
  };

  const handleYellow = () => {
    props.colorHandle("yellow");
  };

  const pallete1 = {
    backgroundColor: 'pink',
  };

  const pallete2 = {
    backgroundColor: 'green',
    color: 'white',
  };

  const pallete3 = {
    backgroundColor: 'yellow',
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid" color="black">
          <a className="navbar-brand" href="/">{props.Title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="/loweranimation">{props.first}</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/about">{props.link}</a>
              </li>
              <li className="nav-item">
                <span className="nav-a disabled" aria-disabled="true">{props.anythingelse}</span>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="checkbox" style={styleswitch}>
        <div className="form-check form-switch" style={styleTheme}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            onChange={handleOnChange}
            id="flexSwitchCheckChecked"
            checked={props.mode === 'dark'}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{text}</label>
          <h3>OR</h3>
          <button className="success" type="button" style={pallete1} onClick={handlePink}>Pink</button>
          <button className="success" type="button" style={pallete2} onClick={handleGreen}>Green</button>
          <button className="success" type="button" style={pallete3} onClick={handleYellow}>Yellow</button>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  Title: PropTypes.string,
  first: PropTypes.string,
  link: PropTypes.string,
  anythingelse: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  colorHandle: PropTypes.func.isRequired,
};
