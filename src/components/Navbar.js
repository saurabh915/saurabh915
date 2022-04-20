import React from 'react'
import PropTypes from 'prop-types'/* shortcut ---impt  */
import { Link } from 'react-router-dom';
export default function Navbar(props) {// rfc
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* change a to Link and href to "to" below */}
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutTextUtils}</Link>       
            {/* here we define which are the navbar are you want access in app.js for that we have to write props.variable_name by which you can change the content of that veriable and that changes will be reflect in same place of navbar  */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li> 
        <form className="d-flex" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </ul>

    {/* switch */}
      <div className={`form-check form-switch text-${props.mode==="white"?"#031518":"white"}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault "onClick={props.togglemode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheck">Default switch checkbox input</label>
</div>

    </div>
  </div>
</nav>
  )
}                  /*pts */
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutTextUtils: PropTypes.string}

 /**default props if you do not assign values to prop variables */
 Navbar.defaultProps = {
    //  title : 'Settitlehere',
     aboutTextUtils:'Abouttexthere'
 };
