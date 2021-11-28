import { Button, Col, Container, Div, Icon, Image, Row } from 'atomize';
import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/pngwing.png"

function Sidedrawer() {
  const [activeTabColor, setActiveTabColor] = useState(false);
  return (
    <Div bg="whitesmoke" h="100vh">
      <Container p="0.5rem" d="flex" flexDir="column">
        <NavLink to="/login">
          <Div h="3.5rem" w="2.5rem" m="1rem">
          <Div m="0.5rem 5rem">
                  <Image
                    src={Logo}
                    bgSize="fill"
                    // bgColor="transparent"
                    w="4.5rem"
                    h="3.5rem"
                  />
                </Div>
          </Div>
        </NavLink>
        <NavLink to="/profiles" activeClassName="selected">
          <Button
            h="2.5rem"
            w="100%"
            textAlign="left"
            bg="whitesmoke"
            textColor={"info600"}
            //   onClick={setActiveTabColor(true)}
            //   onBlur={setActiveTabColor(false)}
            hoverBg="info600"
            hoverTextColor="white"
            rounded="md"
            //   m={{ l: '1rem' }}
            shadow="5"
            hoverShadow="4"
            prefix={
              <Icon
                name="UserSolid"
                size="20px"
                color={"info600"}
                m={{ r: '0.5rem' }}
              />
            }
          >
            Profile
          </Button>
        </NavLink>

        <NavLink to="posts">
          <Button
            h="2.5rem"
            w="100%"
            textAlign="left"
            bg="info700"
            hoverBg="info600"
            rounded="md"
            //   m={{ l: '1rem' }}
            shadow="5"
            hoverShadow="4"
            prefix={
              <Icon
                name="UserSolid"
                size="20px"
                color="white"
                m={{ r: '0.5rem' }}
              />
            }
          >
            Posts
          </Button>
        </NavLink>
      </Container>
    </Div>
  );
}

export default Sidedrawer;
