import React from 'react';



class FrameShowImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageStatus: "loading",
      imageSrc: props.shownFrame.awsLocaleLight,
      waitingSrc: props.shownFrame.awsLocale
     };
     this.handleImageLoaded = this.handleImageLoaded.bind(this);
     this.handledImageErrored = this.handleImageErrored.bind(this);
  }

  handleImageLoaded() {
    this.setState({
      imageStatus: "loaded",
      imageSrc: this.state.waitingSrc
    });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }


  render() {
    return (
      <img
        className="image-show"
        src={this.state.imageSrc}
        onLoad={this.handleImageLoaded}
        onError={this.handleImageErrored}
        alt={`User uploaded photo. {${this.props.shownFrame.title}`}
      />
    );
  }
}
export default FrameShowImage;
