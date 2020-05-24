import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsCard from './NewsCard';
import Paginator from './Paginator';
import M from 'materialize-css'
import {
  getNewsByKeyword,
  getNewsfeed,
  resetError
} from '../actions';

let instanceModal = {};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
    
    this.props.getNewsfeed(1);
  }
  
  componentDidMount() {
    M.AutoInit();
    instanceModal = M.Modal.getInstance(this.Modal);
    // if (this.props.error) {
    //   instanceModal.open();
    // }
  }

  onPageClick(newPageValue){
    this.setState({ activePage: newPageValue });
    if (this.props.userIsSearching) {
      this.props.getNewsByKeyword(
        this.props.searchBarInput,
        newPageValue
      );
    } else {
      this.props.getNewsfeed(newPageValue);
    }
  }

  onNextPageClick(){
    const { paginatorValues } = this.props;
    if (this.state.activePage !== paginatorValues[paginatorValues.length - 1]) {
      this.setState({ activePage: this.state.activePage + 1 });
      if (this.props.userIsSearching) {
        this.props.getNewsByKeyword(
          this.props.searchBarInput,
          this.state.activePage + 1
        );
      } else {
        this.props.getNewsfeed(this.state.activePage + 1);
      }
    }
  }
  
  onPrevPageClick(){
    if (this.state.activePage !== 1) {
      this.setState({ activePage: this.state.activePage - 1});
      if (this.props.userIsSearching) {
        this.props.getNewsByKeyword(
          this.props.searchBarInput,
          this.state.activePage - 1
        );
      } else {
        this.props.getNewsfeed(this.state.activePage - 1);
      }
    }
  }

  renderNews() {
    return this.props.news.map((article, i) => {
      return <NewsCard key={i.toString()} article={article} />
    })
  }

  render() {
    if (this.props.requestError) {
      instanceModal.open();
    }

    return (
      <div className='row s12'>
        {this.props.news.length > 0 && this.renderNews()}
        {this.props.totalResults > 20 && !this.props.loading &&
          <Paginator 
            values={this.props.paginatorValues} 
            active={this.state.activePage}
            onPrev={this.onPrevPageClick.bind(this)}
            onNext={this.onNextPageClick.bind(this)}
            onPageClick={this.onPageClick.bind(this)}
          />
        }
        <div ref={Modal => {this.Modal = Modal}} id="modal1" className="modal">
          <div className="modal-content">
            <h4>Oops!...</h4>
            <p>{this.props.errorMessage}</p>
          </div>
          <div onClick={() => this.props.resetError()} className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Ok</a>
          </div>
        </div>

      </div>
    );
  }
};

const mapStateToProps = ({ home, header }) => ({
  news: home.news,
  paginatorValues: home.paginatorValues,
  totalResults: home.totalResults,
  loading: home.loading,
  searchBarInput: header.searchBarInput,
  userIsSearching: header.userIsSearching,
  errorMessage: home.errorMessage,
  requestError: home.requestError,
});

export default connect(mapStateToProps, {
  getNewsByKeyword,
  getNewsfeed,
  resetError,
})(Home);

