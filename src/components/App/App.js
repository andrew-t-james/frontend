import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import { connect } from 'react-redux';
import { getHousesAction } from '../../actions';
import wolf from '../../assets/wolf.gif';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      error: null
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    const response = await fetch('http://localhost:3001/api/v1/houses');
    const houses = await response.json();

    if (!response.ok) {
      this.setState({ error: true });
    }

    this.setState({ isLoading: false });
    this.props.getHouses(houses);
  }
  render() {
    const { isLoading } = this.state;

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          {isLoading ?
            <div ><img id="wolf" src={wolf} alt="Wolf gif"/></div>
            :
            <CardContainer />
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getHouses: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  getHouses: houses => dispatch(getHousesAction(houses))
});

export default connect(null, mapDispatchToProps)(App);
