import React, { Component } from 'react';
import { connect } from 'react-redux';
import { landingIsActive } from '../actions';

const divStyle = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
};

class NotFound extends Component {
  constructor(props) {
    super(props);
    props.landingIsActive(true);
    this.state = {};
  }

  renderPromo() {
    return (
      <div style={{ backgroundColor: 'rgba(52, 52, 52, 0.05)', borderRadius: '25px', margin: "30px"}} className="row">
        <div className="row s12">
          <img 
            src={require("../assets/news_logo.png")} 
            alt={''} 
            height="60%" 
            width="60%">
          </img>
        </div>
        <h4 style={{ marginBottom: 30 }}>All headlines in just one place</h4>
        <div className="col s12 m12 l4">
          <div className="center promo promo-example">
            <i style={{ fontSize: "90px", color: '#2196f3'}} className="material-icons ">flash_on</i>
            <p className="promo-caption">Enjoy the fastest experience</p>
            <p className="light center">Our engine can search through the whole web and narrow down just what you are interested in, in a matter of seconds. Find any article or piece of news you can think of.</p>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="center promo promo-example">
            <i style={{ fontSize: "90px", color: '#2196f3'}} className="material-icons ">aspect_ratio</i>
            <p className="promo-caption">Simple, yet elegant</p>
            <p className="light center">Use this web application, at anytime in any device. Yes, it also supports mobile screens, so you can watch any articles on any screen you have available</p>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="center promo promo-example">
            <i style={{ fontSize: "90px", color: '#2196f3'}} className="material-icons ">insert_chart</i>
            <p className="promo-caption">All articles in just one place</p>
            <p className="light center">We've worked effortlessly so you dont have to look around somewhere else for missing details inside articles, or news you just wouldn't miss.</p>
          </div>
        </div>
        <div style={{ margin: '20px 0px 20px 0px' }} className="col s12">
          <h4>Get started by loggin in!</h4>
        </div>

        <div className="col s12">
          <a href="/auth/google">
            <button 
              style={{ margin: "25px" }}
              className="waves-effect waves-light btn blue"
              onClick={() => {
                setTimeout(() => { // to avoid visual hiccup
                  this.props.landingIsActive(false)
                }, 1000);
              }}
            > 
              Login with Google
            </button>
          </a>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div style={divStyle}>
      {this.renderPromo()}
    </div>
    );
  }
}

const mapStateToProps = ({ home }) => ({
  requestError: home.requestError
});

export default connect(mapStateToProps, { 
  landingIsActive,
})(NotFound);

