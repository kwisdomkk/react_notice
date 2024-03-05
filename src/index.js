import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient,QueryClientProvider } from 'react-query';
import List from './List';
import Write from './Write';
import Detail from './Detail';
import Update from './Update';

const router = createBrowserRouter([
  {
    path: "/",
    element:<List/>,
  },
  {
    path: "/write",
    element:<Write/>,
  },
  {
    path: "/:id",
    element:<Detail/>,
  },
  {
    path: "/:id/edit",
    element:<Update/>
  }
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

