import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DataLoadingHeatmap } from './map';

export default class Heatmap extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    const {lat, lng} = this.props.initialCenter;
    this.updateData = this.updateData.bind(this);
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      },
      mapData: [
        {lat: 37.782, lng: -122.447, weight: 0.5},
        {lat: 37.782, lng: -122.443, weight: 2},
        {lat: 37.782, lng: -122.441, weight: 3},
        {lat: 37.782, lng: -122.439, weight: 2},
        {lat: 37.782, lng: -122.435, weight: 0.5},
        {lat: 37.785, lng: -122.447, weight: 3},
        {lat: 37.785, lng: -122.445, weight: 2},
        {lat: 37.785, lng: -122.441, weight: 0.5},
        {lat: 37.785, lng: -122.437, weight: 2},
        {lat: 37.785, lng: -122.435, weight: 3}
      ],
    }
  }

  // You can find out the new position after map is moved
  // by assigning a callback to the onMove prop.
  // In this example, the callback function is updateData.
  // You can also make backend requests in the updateData function.
  // Note that updateData() is not optimized to minimize requests
  // and the onMove event handler is fired a lot!
  // You can optionally set a timeout on the request inside updateData
  // for better optimization
  updateData(newBounds, newCenter) {
    // Uncomment to pass new data to heatmap
    /* this.setState({
         mapData: [
           {lat: 37.785, lng: -122.447, weight: 3},
           {lat: 37.785, lng: -122.445, weight: 2},
           {lat: 37.785, lng: -122.441, weight: 0.5},
           {lat: 37.785, lng: -122.437, weight: 2}
         ]
     });*/
  }

  render() {
    return (
      <DataLoadingHeatmap
        zoom={12}
        onMove={this.updateData}
        heatmapRawData={this.state.mapData}
      >
      </DataLoadingHeatmap>
    );
  }
}

Heatmap.defaultProps = {
  // San Francisco by default
  initialCenter: {
    lat: 37.774929,
    lng: -122.419416
  }
};

Heatmap.propTypes = {
  zoom: PropTypes.number,
  initialCenter: PropTypes.object
};
