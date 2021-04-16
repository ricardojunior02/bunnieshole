import Home from './pages/Home';

import GlobalStyles from './globalStyles';
import { Provider } from 'react-redux';
import store from './redux';

function App() {
  return (
    <>
    <Provider store={store}>
      <Home />
    </Provider>  
    <GlobalStyles />
    </>
  );
}

export default App;
