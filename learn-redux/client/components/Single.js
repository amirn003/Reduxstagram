import React from 'react';
import Photo from './Photo';
// import comment

const Single = React.createClass({
  render() {
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code == this.props.params.postId);
    const post = this.props.posts[i];
    console.log(post);
    return (
      <div className='single-photo'>
        I'm the single
      </div>
    )
  }
})

export default Single;
