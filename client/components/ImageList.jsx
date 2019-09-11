import React from 'react'
import {connect} from 'react-redux'

import Image from './Image'

const ImageList = ({images}) => (
  <div>
    {images.map((image, i) =>
      <Image
        key={i}
        date={image.created_at}
        description={image.description}
        url={image.urls.small}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(
  mapStateToProps
)(ImageList)
