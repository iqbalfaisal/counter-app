import React from 'react';

import store from './store';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
