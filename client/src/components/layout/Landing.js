import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HeroImage from '../../assets/Telework-amico (1).svg';
import {
  Div,
  Input,
  Button,
  Icon,
  Row,
  Col,
  ThemeProvider,
  Text,
  Image
} from 'atomize';
import PropTypes from 'prop-types';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Alert from './Alert';

const theme = {
  grid: {
    gutterWidth: 0
  }
};

const Landing = ({ isAuthenticated }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Redirect to="/register" />

    // <section className='landing'>
    //   <div className='dark-overlay'>
    //     <div className='landing-inner'>
    //       <h1 className='x-large'>Developer Connector</h1>
    //       <p className='lead'>
    //         Create a developer profile/portfolio, share posts and get help from
    //         other developers
    //       </p>
    //       <div className='buttons'>
    //         <Link to='/register' className='btn btn-primary'>
    //           Sign Up
    //         </Link>
    //         <Link to='/login' className='btn btn-light'>
    //           Login
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
