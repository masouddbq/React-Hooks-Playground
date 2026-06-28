import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from './pages/HomePage'


function App() {
  const name = "Masoud";

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage/>} />
    </Route>
    )
  )


  return (
    <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
