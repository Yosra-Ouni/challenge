import React from 'react';
import { Link } from 'react-router-dom'

class PostsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }
  render() {
    const displayData = () => {
      let dataRow = []
      if (this.state.data) {
        dataRow.push(<h3>List of Posts</h3>)
        this.state.data.map(post => {
          dataRow.push(
            <li key={post.id}>
              <div class="container">
                <div class="row">
                  <div class="column">
                    <p>Title:</p>
                    <p>{post.title}</p>
                  </div>
                  <div class="column">
                    <p>Description:</p>
                    <p>{post.body}</p>
                    <div class="button">
                      <button class="btn"><Link to={`/${post.id}`}>Details</Link></button>
                    </div>
                  </div>
                </div>
              </div>
            </li>)
        })
      }
      return dataRow
    }
    return (
      <div>
        <ul>
          {displayData()}
        </ul>
      </div>
    )
  }
}
export default PostsList
