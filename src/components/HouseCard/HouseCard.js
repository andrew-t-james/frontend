import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { membersAction, houseIndexAction } from '../../actions/index';
import { connect } from 'react-redux';

export class HouseCard extends Component {
  getSwornMembers = members => {
    const getMember = members.map(async member => {
      const id = member.replace(/\D+/g, '');
      const response = await fetch(`http://localhost:3001/api/v1/character/${id}`);
      const swornMember = await response.json();
      return swornMember.name;
    });
    return Promise.all(getMember);
  };

  allSwornMembers = async swornMembers => {
    const members = await this.getSwornMembers(swornMembers);
    this.props.displayMembers(members);
  };

  render() {
    const { name, founded, seats, titles, ancestralWeapons, coatOfArms, swornMembers, members, index } = this.props;
    const currentSeats = seats.map(seat => seat);
    const currentTitle = titles.map(title => title);
    const weapons = ancestralWeapons.map(weapon => weapon);
    const renderMembers = members.map(member => member);

    return (
      <div className="Card" onClick={() => this.allSwornMembers(swornMembers) && this.props.currentHouseIndex(index)}>
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
          Sworn Members: {index === this.props.houseIndexFromStore ? renderMembers : null}
        </p>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  members: state.members,
  houseIndexFromStore: state.index
});

export const mapDispatchToProps = dispatch => ({
  displayMembers: members => dispatch(membersAction(members)),
  currentHouseIndex: index => dispatch(houseIndexAction(index))
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
  displayMembers: PropTypes.func,
  members: PropTypes.arrayOf(PropTypes.strings),
  index: PropTypes.number,
  houseIndexFromStore: PropTypes.number,
  currentHouseIndex: PropTypes.func
};