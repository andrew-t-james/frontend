import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getHousesActions } from '../../actions';
class App extends Component {
  componentDidMount = async () => {
    const response = await fetch('http://localhost:3001/api/v1/houses');
    const houses = await response.json();
    this.props.getHouses(houses);
  }
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  houses: PropTypes.arrayOf(PropTypes.object),
  getHouses: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  houses: state.houses
});

const mapDispatchToProps = dispatch => ({
  getHouses: houses => dispatch(getHousesActions(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
