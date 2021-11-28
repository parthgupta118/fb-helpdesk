import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { Div, Icon, Input, Text, Textarea } from 'atomize';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <Div m={{t: "2rem"}} w="30rem" p="1rem 2rem" bg="white" rounded="md" className="post-form">
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <Text m={{b: "1rem"}} textSize="subheader">Create Post</Text>
        <Textarea
          name="text"
          cols="30"
          rows="5"
          style={{border: "none"}}
          bg="whitesmoke"
          placeholder="What's up! Write Something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <Input
          type="submit"
          w="15rem"
          bg="info700"
          textColor="white"
          className="btn btn-dark my-1"
          value="Publish"
        >
          <Icon name="RightArrowSolid" size="20px" />
        </Input>
      </form>
    </Div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
