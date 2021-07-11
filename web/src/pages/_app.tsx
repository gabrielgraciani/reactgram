import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import GlobalStyles from '../styles/global';
import store from '../store';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
