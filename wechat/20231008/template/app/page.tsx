'use client';

import { counter, useDispatch, useSelector } from '@/lib/redux';

export default function Page() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div>
      <span>{count}</span>
      <hr />
      <button onClick={() => dispatch(counter.actions.increment())}>increment</button>
      <button onClick={() => dispatch(counter.actions.decrement())}>decrement</button>
    </div>
  )
}

