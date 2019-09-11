import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts, fetchImages} from '../actions'

class LoadSubreddit extends React.Component {
  state = {
    subreddit: ''
  }

  changeHandler = (evt) => {
    this.setState({
      subreddit: evt.target.value
    })
  }

  render () {
    return (
      <>
      <div>
        <h1>Choose a SubReddit</h1>
        <input type='text' onChange={this.changeHandler}></input>
        <button onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}>
          Fetch Posts
        </button>
        {this.props.children}
      </div>
      <div>
        <h1>Show a list of images</h1>
        <button onClick={() => this.props.dispatch(fetchImages())}>
          Fetch Images
        </button>
        {this.props.children}
      </div>
    </>
    )
  }
}

export default connect()(LoadSubreddit)