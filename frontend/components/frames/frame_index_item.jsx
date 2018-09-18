import React from 'react';
import { Link } from 'react-router-dom'


class FrameIndexItem extends React.Component {
  consturctor(props {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  })

  handleClick( {
    this.props.history.push(`/frames/${this.props.frame.id}`)
  })

  render() {
    return (
      <div>
        className = `frames-index-item`
        onClick (this.handleCLick)
        <div className=`index-item-details`>
          <img src="{awsLocale}"></img>
        </div>
      </div>
    )
  }
}

export default withRouter(FrameIndexItem);
