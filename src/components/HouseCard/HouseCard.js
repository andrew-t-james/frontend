import React from 'react';
import { membersAction } from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const HouseCard = props => {
  const { name, founded, seats, titles, ancestralWeapons, coatOfArms, swornMembers, displayMembers, members } = props;
  const currentSeats = seats.map(seat => seat);
  const currentTitle = titles.map(title => title);
  const weapons = ancestralWeapons.map(weapon => weapon);
  const renderMembers = members.map(member => member);

  const getSwornMembers = members => {
    const getMember = members.map(async member => {
      const id = member.replace(/\D+/g, '');
      const response = await fetch(`http://localhost:3001/api/v1/character/${id}`);
      const swornMember = await response.json();
      return swornMember.name;
    });
    return Promise.all(getMember);
  };

  const allSwornMembers = async () => {
    const members = await getSwornMembers(swornMembers);
    displayMembers(members);
  };


  return (
    <div className="Card" onClick={() => allSwornMembers()}>
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
      <p>
        Sworn Members: {renderMembers}
      </p>
    </div>
  );
};

export const mapStateToProps = state => ({
  members: state.members
});

export const mapDispatchToProps = dispatch => ({
  displayMembers: members => dispatch(membersAction(members))
});

export default connect(mapStateToProps, mapDispatchToProps)(HouseCard);

HouseCard.propTypes = {
  name: PropTypes.string,
  founded: PropTypes.string,
  seats: PropTypes.array,
  titles: PropTypes.array,
  ancestralWeapons: PropTypes.array,
  coatOfArms: PropTypes.string,
  swornMembers: PropTypes.array,
  displayMembers: PropTypes.func
};