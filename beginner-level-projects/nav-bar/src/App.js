import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// dynamic import of font-awesome 
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
// individual import of font awesome
// import { faBars, faHouseChimney, faPhoneVolume, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import "./App.css";
import { useState } from 'react';


const links = [
  {
    "linkText": "home",
    "url": "#home",
    "icon": "faHouseChimney"
  }, 
  {
    "linkText": "about",
    "url": "#about",
    "icon": "faPhoneVolume"
  },
  {
    "linkText": "contact",
    "url": "#contact",
    "icon": "faPhoneVolume"
  },
  {
    "linkText": "projects",
    "url": "#projects",
    "icon": "faDiagramProject"
  }
]

const App = () => {
  const [show, setShow] = useState(false)

  const toggleMe = () => {
    setShow(!show)
  }

  return(
    <header className='nav-bar'>
      <div className="logo">
        <h1>NavLogo</h1>
      </div>
      <div className="toggle">
        <FontAwesomeIcon icon={faHouseChimney} onClick={toggleMe} />
      </div>
      <ul className={`nav-bar-list ${show ? "active" : ""}`}>
        {
          links.map((val, index) => {
            return (
              <li id={index}>
                {/* <FontAwesomeIcon icon={solid(val.icon)} /> */}
                <a href={val.url}>{val.linkText}</a>
              </li>
            )
          })
        }
      </ul>
    </header>
  );
};

export default App;