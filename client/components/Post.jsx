import React from 'react'

const resize = {
  width: 250,
  height: 250
}

const Post = ({ title, summary, date, image }) => (
  <div>
    <h2>{title}</h2>
    <p>Date Created: {date.toString()}</p>
    <img src={image} style={resize}/>
    <p>{summary}</p>
  </div>
)

export default Post
