import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';

import { 
} from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    };
  }

  render() {
    return (
      <div className="col s12" style={{ paddingLeft: "15px", paddingRight: "15px" }}>
       You are home now
      </div>
    );
  }
};

const mapStateToProps = ({  }) => ({
  
});

export default connect(mapStateToProps, { 
  
})(Home);

