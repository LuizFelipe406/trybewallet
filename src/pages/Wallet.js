import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getCurrencyAction } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    return (
      <main>
        <Header />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(getCurrencyAction()),
});

Wallet.propTypes = {
  getCurrency: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
