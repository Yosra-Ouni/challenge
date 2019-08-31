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
    const DataList = () => {
      let dataRow = []
      if (this.state.data) {
        dataRow = this.state.data.map(post => {
          return(
              <div  key={post.id} className="container">
                <div className="row">
                  <div className="column">
                    <span className="title">Title:</span>
                    <p>{post.title}</p>
                  </div>
                  <div className="column">
                    <span className="title">Description:</span>
                    <p>{post.body}</p>
                    <button className="btn"><Link to={`/${post.id}`}>Details</Link></button>
                  </div>
                </div>
              </div>
            )
        })
      }
      return dataRow
    }
    return (
      <div style={{padding: '20px'}}>
        <h3>List of Posts</h3>
        <DataList/>
      </div>
    )
  }
}
export default PostsList
