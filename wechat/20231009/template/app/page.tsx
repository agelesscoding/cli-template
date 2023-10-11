'use client';

import { counter, useDispatch, useSelector } from '@/lib/redux';

export default function Page() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <p>{count}</p>
        <button onClick={() => dispatch(counter.actions.increment())}>increment</button>
        <button onClick={() => dispatch(counter.actions.decrement())}>decrement</button>
        <hr />
        <h1 style={{ textAlign: 'center', paddingTop: '80px', color: '#666' }}>「码上花甲」公众号 2023.10.09 文章配套源码</h1>
        <img src="https://cdn.jsdelivr.net/gh/smpower/oss.hi-ruofei.com@main/wechat.png" alt="公众号「码上花甲」" />
    </div>
  )
}

