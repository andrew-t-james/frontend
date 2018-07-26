import React from 'react';
import HouseCard from '../HouseCard/HouseCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CardContainer = ({ houses }) => {
  const renderHouses = houses.map(house => <HouseCard key={house.name} {...house} />);
  return (
    <div className="Container">
      {renderHouses}
    </div>
  );
};

CardContainer.propTypes = {
  houses: PropTypes.arrayOf(PropTypes.object)
};

export const mapStateTopProps = state => ({
  houses: state.houses
});

export default connect(mapStateTopProps)(CardContainer);
