

import React from 'react';



class FrameShowImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageStatus: "loading",
      imageSrc: props.shownFrame.awsLocaleLight,
      waitingSrc: props.shownFrame.awsLocaleMedium,
      waitingFullSrc: props.shownFrame.awsLocaleFull,
      changeCount: 0,
     };
     this.handleImageLoaded = this.handleImageLoaded.bind(this);
     this.handledImageErrored = this.handleImageErrored.bind(this);
  }

  handleImageLoaded() {
    if (this.state.changeCount < 1) {
      this.setState({
        imageStatus: "loaded",
        imageSrc: this.state.waitingSrc,
        changeCount: 1,
      });
    } else if (this.state.waitingFullSrc) {
      this.setState({
        imageStatus: "loaded",
        imageSrc: this.state.waitingFullSrc,
        changeCount: 2,
      });
    }
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }


  render() {
    return (
      <img className="index-image"
           src={this.state.imageSrc}
           onLoad={this.handleImageLoaded}
           onError={this.handleImageErrored}
           alt={`User uploaded photo. {${this.props.shownFrame.title}`}
      />
    );
  }
}
export default FrameShowImage;
