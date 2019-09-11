import React from 'react'

const Image = ({ url, description, date }) => (
  <div>
    <img src={url} alt=""/>
    <p>Date: {date}</p>
    <p>{description}</p>
  </div>
)

export default Image
