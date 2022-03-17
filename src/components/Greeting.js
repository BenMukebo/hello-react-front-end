import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmessage } from '../redux/message/api';

const Greeting = () => {
  const message = useSelector((state) => state.messageReducer.message);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchmessage());
  };

  return (
    <div className="wrapper">
      <h1>Greeting</h1>
      <div className="message">
        Message:
        {' '}
        {message}
      </div>
      <button type="button" onClick={handleClick}>GREETING</button>
    </div>
  );
};

export default Greeting;
