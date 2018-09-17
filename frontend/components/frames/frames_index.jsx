import React from 'react';
import FrameIndexItem from '.frame_index_item'

const FrameIndex = ({frames}) => (
  <div>
    {frames.map( frame => (
      <FrameIndexItem frame={frame} key = `frame-${frame.id}`/>
    ))}
  </div>
);

export default FrameIndex
