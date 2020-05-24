import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  searchBarInputChange, 
  hideTopHeadlines, 
  getNewsByKeyword, 
  getNewsfeed 
} from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchBar: false,
    };
  }

  _renderHeaderBtns() {
    if (this.props.userIsSearching) {
      return [
        <li key="1" onClick={this._toggleSearchBar.bind(this)} ><a href="#!"><i className="material-icons left">search</i>SEARCH BY KEYWORD</a></li>,
        <li key="2" onClick={this._onTopStoriesClick.bind(this)} ><a href="#!"><i className="material-icons left">whatshot</i>TOP STORIES</a></li>,
        <li key="3"><a href="/api/logout">LOG OUT</a></li>
      ]
    } else {
      return [
        <li key="2" onClick={this._toggleSearchBar.bind(this)} ><a href="#!"><i className="material-icons left">search</i>SEARCH BY KEYWORD</a></li>,
        <li key="3"><a href="/api/logout">LOG OUT</a></li>
      ];
    }
  }

  _onTopStoriesClick() {
    this.props.hideTopHeadlines(false);
    this.props.getNewsfeed(1);
  }

  _toggleSearchBar() {
    this.setState({ showSearchBar: !this.state.showSearchBar });
  }
  
  _onSearchBarChange(event) {
    this.props.searchBarInputChange(event.target.value.toLowerCase())
  }

  _handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.hideTopHeadlines(true);
      this.props.getNewsByKeyword(this.props.searchBarInput, 1);
    }
  }

  renderSearchBar() {
    return (
      <div className="blue nav-wrapper">
        <form>
          <div className="input-field">
            <input onKeyDown={this._handleKeyDown.bind(this)} placeholder='Search by keyword' onChange={this._onSearchBarChange.bind(this)} id="search" type="search" required></input>
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i onClick={this._toggleSearchBar.bind(this)} className="material-icons">close</i>
          </div>
        </form>
      </div>
    );
  }

  renderNavigationBar() {
    return (
      <div className="blue nav-wrapper">
        <Link
          to={this.props.user ? '/surveys' : '/'}
          className="brand-logo"
        >
          <img 
            style={{ marginLeft: 15 }}
            src={require("../assets/news_logo_white.png")} 
            alt={''} 
            height="55" 
            width="55">
          </img>
        </Link>
        <ul className="right hide-on-med-and-down">
          {this._renderHeaderBtns()}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <nav>
        {
          this.state.showSearchBar ? 
          this.renderSearchBar() : 
          this.renderNavigationBar()
        }
      </nav>
    );
  }
}

const mapStateToProps = ({ auth, header }) => {
  return {
    user: auth.user,
    searchBarInput: header.searchBarInput,
    userIsSearching: header.userIsSearching,
  };
};

export default connect(mapStateToProps, {
  searchBarInputChange,
  hideTopHeadlines,
  getNewsByKeyword,
  getNewsfeed,
})(Header);
