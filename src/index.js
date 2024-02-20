import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient,QueryClientProvider } from 'react-query';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
]);

const queryClient= new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

