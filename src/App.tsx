import { Provider, useSelector } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./Store/store";
import { QueryClient, QueryClientProvider } from "react-query";
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./Layout/Layout";
import Routing from "./Routes/routing";

const App = () => {
  const persistor = persistStore(store);
  const queryClient = new QueryClient();
  useEffect(() => {
    setTimeout(() => {
    }, 5000);

    return () => {
    };
  }, []);

  // Conditional rendering based on loading state
  return (
    <>
    <Provider store={store}> 
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
              <QueryClientProvider client={queryClient}>
                  <Layout>
                    <Routing /> 
                  </Layout>
              </QueryClientProvider>
          </BrowserRouter>
        </PersistGate>
    </Provider>
    </>
  );
}

export default App;
