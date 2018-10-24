import React from 'react';

function PreviewImageBox({imageUrl, fileName}) {
  if (!imageUrl) {
    return null;
  }
  return (
    <img
      src={this.props.imageURL}
      className="preview-image"
      alt={this.props.currentFile.name}
    />
);
}

// class PreviewImageBox extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     if (!this.props.imageURL) {
//       return null;
//     }
//     return (
//       <img
//         src={this.props.imageURL}
//         className="preview-image"
//         alt={this.props.currentFile.name}
//       />
//   );
//   }
// }

export default PreviewImageBox;
