import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getHousesActions } from '../../actions';
import wolf from '../../assets/wolf.gif';

export class App extends Component {
  state = {
    isLoading: true,
    error: null
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
          {isLoading && <div ><img id="wolf" src={wolf} alt="Wolf gif"/></div>}
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
