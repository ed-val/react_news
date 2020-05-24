import React from 'react';

const NewsCard = (props) => {
  const date = new Date(props.article.publishedAt).toString();
  const readableDate = date.split(' ').splice(0, 5).join(' ');
  return ( 
    <div className="col s12" style={{ paddingLeft: "15px", paddingRight: "15px" }}>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" alt='' src={props.article.urlToImage}></img>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{props.article.title}<i className="material-icons right">more_vert</i></span>
          <div className='row'>
            <p className='col grey-text'>By {props.article.author} |</p>
            <p className='col grey-text'>at {readableDate}</p>
          </div>
          <p><a href={props.article.url}>See note</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">About...<i className="material-icons right">close</i></span>
          <p>{props.article.description}</p>
        </div>
      </div>
    </div>
   );
}
 
export default NewsCard;