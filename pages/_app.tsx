import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import initStore from "store";

const MyApp = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default withRedux(() => initStore)(MyApp);
