import React from 'react'
import AvatarEditor from 'react-avatar-editor'
import { connect } from 'react-redux'
 
const ImageEditor = ({imageUrl})
  render() {
    return (
      <AvatarEditor
        image={`${imageUrl}`}
        width={104}
        height={104}
        borderRadius={50}
        border={50}
        color={[255, 255, 255, 0.6]}
        scale={2.0}
        rotate={0}
        onLoadSuccess={ () => { debugger} }
        onLoadFailure={ () => { debugger} }
      />
    )
  }
}

export default ImageEditor