import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const ThankYou =() => {
  return (
    <div className="thankYou">
        <h1>Thank You!</h1>
        <p>{`You'r form has been Submited!`}</p>
        <Link to="/">
            <button className="btn btn-primary" type="submit">Back</button>
        </Link>
    </div>
  );
}

export default ThankYou;
