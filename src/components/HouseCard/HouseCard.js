import React from 'react';
import PropTypes from 'prop-types';

const HouseCard = props => {
  const { name, founded, seats, titles, ancestralWeapons, coatOfArms } = props;
  const currentSeats = seats.map(seat => seat);
  const currentTitle = titles.map(title => title);
  const weapons = ancestralWeapons.map(weapon => weapon);

  return (
    <div className="Card">
      <h1>{name}</h1>
      <h2>{founded ? `Founded': ${founded}`: 'Founded: N/A'}</h2>
      <p>
       Seats: {currentSeats}
      </p>
      <p>
        Titles: {currentTitle}
      </p>
      <p>
        Ancestral Weapons: {weapons}
      </p>
      <p>
        Coat Of Arms: {coatOfArms}
      </p>
    </div>
  );
};

HouseCard.propTypes = {
  name: PropTypes.string,
  founded: PropTypes.string,
  seats: PropTypes.array,
  titles: PropTypes.array,
  ancestralWeapons: PropTypes.array,
  coatOfArms: PropTypes.string
};

export default HouseCard;
