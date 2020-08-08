import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
	        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
	            <span className="navbar-toggler-icon"></span>
	        </button>
		    <span className="navbar-brand title heading">VECode</span>
	        <div className="navbar-nav ml-auto items" id="navbarCollapse">
	            <div className="navbar-nav">
	                <ul className="nav navbar-nav">
			            <li className="nav-item">
			                <span className="nav-link">Home</span>
			            </li>		               
			            <li className="nav-item">
			                <span className="nav-link">Profile</span>			                 
			            </li>			              
			            <li className="nav-item">
			                <span className="nav-link">MCQ</span>
			            </li>
                        <li className="nav-item">
			                <span className="nav-link">Info</span>
			            </li>
                        <li className="nav-item">
			                <span className="nav-link">About Us</span>
			            </li>
			        </ul>
	            </div>
	        </div>
	    </nav>
    );
}

export default Header;