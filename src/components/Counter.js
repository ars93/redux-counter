// src/components/Counter.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';
import { fetchUsers } from '../redux/userSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const { loading, users, error } = useSelector((state) => state.applyusers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());

    // dispatch(updateCounter(users.length));
    // console.log(users.length);
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
