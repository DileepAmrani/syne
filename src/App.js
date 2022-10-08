import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./components/routes/index";

import { QueryClient, QueryClientProvider } from 'react-query';
import Toasts from "./components/Toasts";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
    mutations: {
      retry: 0,
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <AllRoutes />
        <Toasts />
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;
