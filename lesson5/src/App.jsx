import React from 'react';
import Wrapper from './components/Wrapper';
import Counter from './components/Counter';

const App = () => {
  return (
    <Wrapper>
      <Counter initialValue={10} />
      <Counter initialValue={100} />
    </Wrapper>
  );
};

export default App;