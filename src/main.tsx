import { router } from "@core";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { GlobalStyled } from "./globals";
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const container = document.getElementById('root');
const root = createRoot(container as Element);

const client = new Client({
  url: 'https://api.producthunt.com/v2/api/graphql',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    const token = import.meta.env.VITE_API_TOKEN;
    return {
      headers: { authorization: `Bearer ${token}`},
    };
  },

});

const App = () => {
  return (
    <>
      <GlobalStyled />
      <Provider value={client}>
        <RouterProvider
          router={createBrowserRouter(router)}
        />
      </Provider>
    </>
  )
}


root.render(<App />);