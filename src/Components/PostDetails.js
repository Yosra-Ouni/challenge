import React from 'react';
import { Link } from 'react-router-dom'

class PostDetails extends React.Component {
  state = {
    post: null,
    user: null
  }

  componentDidMount() {
    const { id } = this.props.match.params

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(post => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then(response => response.json())
          .then((user) => {
            this.setState({ user, post })
          })
      })
  }
  render() {
    const ShowDetails = () => {
      if (this.state.user && this.state.post) {
        return (
          <div className="container">
            <span className="title">User:</span>
            <p>{this.state.user.name}</p>
            <span className="title">Title:</span>
            <p>{this.state.post.title}</p>
            <span className="title">Post:</span>
            <p>{this.state.post.body}</p>
            <button className="btn">
              <Link to={'/'}>Go back to posts</Link>
            </button>
          </div>
        )
      }
      return (
        <div>
          no data to show
        </div>
      )
    }
    return (
      <div>
        <ShowDetails />
      </div>
    )
  }

}
export default PostDetails
