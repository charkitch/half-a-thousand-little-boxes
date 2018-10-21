import React from 'react';



class SplashImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageStatus: "loading",
      imageSrc: window.splashLoader,
      waitingSrc: window.splash
     };
     this.handleImageLoaded = this.handleImageLoaded.bind(this);
     this.handledImageErrored = this.handleImageErrored.bind(this);
  }

  handleImageLoaded() {
    this.setState({
      imageStatus: "loaded",
      imageSrc: window.splash
    });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }


  render() {
    return (
        <img
          src={this.state.imageSrc}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}
          className="splash-image appeal-image"
          alt='A bear walking into a chasm along a shore in Alaska.'
        />
    );
  }
}
export default SplashImage;
