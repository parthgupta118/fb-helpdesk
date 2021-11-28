import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';
import { Icon, Container, Div, Text } from 'atomize';
import Sidedrawer from './../dashboard/Sidedrawer';


const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Fragment>
      <Container p="0" m="auto" w="80vw" d="flex" flexDir="row">
        <Div flexGrow="8" w="10rem">
          <Sidedrawer />
        </Div>
        <Div flexGrow="24" p="2rem 3rem" bg="#F8FAFB">
          <Text textSize="display1">Posts</Text>
          <Text textSize="subheader">
            <Icon name="UserSolid" /> Welcome to the FB community
          </Text>
          <PostForm />
          <div className="posts">
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        </Div>
      </Container>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
