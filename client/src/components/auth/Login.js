import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
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
import HeroImage from '../../assets/Telework-amico (1).svg';
import Logo from "../../assets/pngwing.png"

const theme = {
  grid: {
    gutterWidth: 0
  }
};

const Login = ({ login, isAuthenticated }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
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
            <Row h="100vh" align="center" justify="center">
              <Div p="2rem" w="70%" m="auto" shadow="5">
                <Div m="0.5rem 0">
                  <Image
                    src={Logo}
                    bgSize="fill"
                    // bgColor="transparent"
                    w="4.5rem"
                    h="3.5rem"
                  />
                </Div>
                <Text textSize="display1">
                  <strong>Welcome to FB HelpDesk</strong>
                </Text>
                <Text textSize="subheader">
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </Text>

                <Input
                  placeholder="Email Address"
                  p={{ x: '3rem' }}
                  m={{ y: '1.5rem' }}
                  h="3rem"
                  prefix={
                    <Icon
                      name="Mail"
                      color="info800"
                      size="20px"
                      cursor="pointer"
                      pos="absolute"
                      top="50%"
                      left="0.75rem"
                      transform="translateY(-50%)"
                    />
                  }
                  name="email"
                  value={email}
                  onChange={onChange}
                />

                <Input
                  placeholder="Password"
                  p={{ x: '3rem' }}
                  h="3rem"
                  m={{ y: '1.5rem' }}
                  type={showPassword ? 'text' : 'password'}
                  prefix={
                    <Icon
                      name="LockSolid"
                      color="info800"
                      size="20px"
                      cursor="pointer"
                      pos="absolute"
                      top="50%"
                      left="0.75rem"
                      transform="translateY(-50%)"
                    />
                  }
                  suffix={
                    <Button
                      pos="absolute"
                      onClick={() => setShowPassword(!showPassword)}
                      bg="transparent"
                      top="50%"
                      right="0"
                      rounded={{ r: 'md' }}
                      transform="translateY(-50%)"
                    >
                      <Icon
                        name={showPassword ? 'EyeSolid' : 'Eye'}
                        color={showPassword ? 'success800' : 'success800'}
                        size="20px"
                      />
                    </Button>
                  }
                  name="password"
                  value={password}
                  onChange={onChange}
                />

                <Row align="space-between">
                  <Col size="4">
                    <Button
                      h="2.5rem"
                      p={{ l: '2rem', r: '2rem' }}
                      bg="success700"
                      hoverBg="success800"
                      m={{ l: '0.5rem' }}
                      shadow="3"
                      hoverShadow="4"
                      onClick={onSubmit}
                    >
                      <Text>Log In</Text>
                    </Button>
                  </Col>
                  <Col size="4">
                    <Link to="/register">
                      <Button
                        h="2.5rem"
                        bg="info700"
                        hoverBg="info800"
                        shadow="2"
                        hoverShadow="4"
                      >
                        <Text>Sign Up Now</Text>
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Div>
            </Row>
          </Col>
        </Row>
      </ThemeProvider>
    </React.Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
