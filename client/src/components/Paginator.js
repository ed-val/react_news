import React from 'react';

const Paginator = (props) => {
  const divStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };

  const nextButtonStyle = props.active === props.values[props.values.length - 1] 
  ? 'disabled' 
  : 'waves-effect';
  const prevButtonStyle = props.active === 1 ? 'disabled' : 'waves-effect';

  return (
    <div style={divStyle} className='col s12'>
      <ul className="pagination">
        <li key='zero' onClick={() => props.onPrev()} className={prevButtonStyle}>
          <a href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        {props.values.map(page => {
          if (props.active === page) {
            return (
              <li 
                key={page.toString()} 
                onClick={() => props.onPageClick(page)} 
                className="blue active"
              >
                <a href="#!">{page}</a>
              </li>
            );
          } else {
            return (
              <li 
                key={page.toString()} 
                onClick={() => props.onPageClick(page)} 
                className='waves-effect'
              >
                <a href="#!">{page}</a>
              </li>
            );
          }
        })}
        <li key='last' onClick={() => props.onNext()} className={nextButtonStyle}>
          <a href="#!"><i className="material-icons">chevron_right</i></a>
        </li>
      </ul>
    </div>
  );
}

export default Paginator;