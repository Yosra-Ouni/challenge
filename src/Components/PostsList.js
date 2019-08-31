import React from 'react';
import {Link} from 'react-router-dom'

class PostsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data : null,
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => this.setState({ data }))
  }
  render() {
    const displayData = () => {
      let dataRow=[]
      if(this.state.data) {
        this.state.data.map( post =>{
          console.log(post)
          dataRow.push( <li key={post.id}>
            <Link to={`/${post.id}`}>{post.title}</Link>
          </li>)
        })
      }
      return dataRow
    }
    return(
      <div>
        <ul>
          { displayData() }
        </ul>
      </div>
    )
  }
}
export default PostsList
