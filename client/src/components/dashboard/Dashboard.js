import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import {
  Div,
  Input,
  Button,
  Icon,
  Row,
  Col,
  ThemeProvider,
  Text,
  Image,
  Container,
  Dropdown,
  SideDrawer
} from 'atomize';
import HeroImage from '../../assets/Telework-amico (1).svg';
import Sidedrawer from './Sidedrawer';
import Navbar from './../layout/Navbar';

const theme = {
  grid: {
    gutterWidth: 0
  }
};

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      {profile !== null ? (
        <Fragment>
          <Container p="0" m="auto" w="80vw" d="flex" flexDir="row">
            <Div flexGrow="8" w="10rem">
              <Sidedrawer />
            </Div>
            <Div flexGrow="24" p="2rem 5rem">
              <Div d="flex" justify="flex-end" w="80%" p="1rem 0">
                <Dropdown
                  pos="absolute"
                  h="3rem"
                  w="3rem"
                  bg="info200"
                  openSuffix={false}
                  closeSuffix={false}
                  hoverBg="info200"
                  rounded="circle"
                  m={{ r: '1rem' }}
                  shadow="2"
                  hoverShadow="4"
                  targetHover
                  prefix={<Icon name="UserSolid" size="20px" color="info600" />}
                  menu={
                    <Button
                      h="2.5rem"
                      w="5rem"
                      bg="white"
                      textColor="black"
                      hoverTextColor="white"
                      hoverBg="info600"
                      rounded="md"
                      m={{ r: '1rem' }}
                      shadow="2"
                      hoverShadow="4"
                    >
                      Logout
                    </Button>
                  }
                />
              </Div>
              <h1 className="large text-primary">Dashboard</h1>
              <p className="lead">
                <i className="fas fa-user" /> Welcome {user && user.name}
              </p>
              <DashboardActions />
              <Experience experience={profile.experience} />
              <Education education={profile.education} />

              <div className="my-2">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteAccount()}
                >
                  <i className="fas fa-user-minus" /> Delete My Account
                </button>
              </div>
            </Div>
          </Container>
        </Fragment>
      ) : (
        <React.Fragment>
          <ThemeProvider theme={theme}>
            <Row>
              <Col size={{ xs: '0', lg: '7' }}>
                <Row h="100vh" align="center" justify="center" bg="#F8FAFB">
                  <Image
                    src={HeroImage}
                    bgSize="cover"
                    // bgColor="transparent"
                    w="90vw"
                    h="90vh"
                  />
                </Row>
              </Col>
              <Col size={{ xs: '12', lg: '5' }}>
                <Row h="100vh" align="center" justify="center" bg="ff4e00">
                  <Div p="2rem" w="70%" m="auto" shadow="5">
                    <Div m="0.5rem 0">Logo</Div>
                    <Text textSize="display1">
                      <strong>Welcome to Dev Connect</strong>
                    </Text>
                    <Text textSize="subheader">
                      Create a developer profile/portfolio, share posts and get
                      help from other developers
                    </Text>

                    <p>
                      You have not yet setup a profile, please add some info
                    </p>
                    <Link to="/create-profile">
                      <Button
                        prefix={
                          <Icon
                            name="Add"
                            size="16px"
                            color="white"
                            m={{ r: '0.5rem' }}
                          />
                        }
                        bg="info700"
                        hoverBg="info800"
                        rounded="circle"
                        p={{ r: '1.5rem', l: '1rem' }}
                        m={{ t: '1rem' }}
                        shadow="3"
                        hoverShadow="4"
                      >
                        Create Profile
                      </Button>
                    </Link>
                  </Div>
                </Row>
              </Col>
            </Row>
          </ThemeProvider>
          <Fragment></Fragment>
        </React.Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
