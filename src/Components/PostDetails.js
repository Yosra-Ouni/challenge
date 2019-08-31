import React from 'react';
import { throwStatement } from '@babel/types';

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
    console.log(this.state)
    const showDetails = () => {
      if (this.state.user && this.state.post) {
        return (
          <div>
            {this.state.post.id}
          </div>
        )
      } else {
        return (
          <div>
            no data to show
          </div>
        )
      }
    }
    return (
      <div>
        {showDetails()}
        {/*{this.state.user.name} */}
      </div>
    )
  }

}
export default PostDetails
