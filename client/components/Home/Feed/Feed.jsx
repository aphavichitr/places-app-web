import React from 'react';
import FeedEntryContainer from './FeedEntryContainer.jsx';

const Feed = (props) => (
  <div>
    <div className="card-panel blue-grey lighten-5 z-depth-1">
      Explore what's happening on Places:
    </div>
    {props.displayPlaces.map((place, index) => (
      <FeedEntryContainer key={index} place={place} />
      )
    )}
  </div>
);

Feed.propTypes = {
  displayPlaces: React.PropTypes.array,
};

export default Feed;
