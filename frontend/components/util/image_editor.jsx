import React from 'react'
import AvatarEditor from 'react-avatar-editor'
import { connect } from 'react-redux'
 
class ImageEditor extends React.Component {
  render() {
    debugger
    return (
      <AvatarEditor
        image={`${this.props.imageUrl}`}
        width={104}
        height={104}
        borderRadius={50}
        border={50}
        color={[255, 255, 255, 0.6]}
        scale={1.2}
        rotate={0}
        onLoadSuccess={ () => { debugger} }
        onLoadFailure={ () => { debugger} }
      />
    )
  }
}

export default ImageEditor