import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import Payment from "./pages/Payment";
import Projects from "./pages/Projects";
import Hooks from "./pages/Hooks";
import Materials from "./pages/Materials";
import CleanUp from './components/CleanUp'

function App() {
  const name = "Masoud";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/projects/payment" element={<Payment />} />
        <Route path="/about" element={<Hooks />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/materials/cleanup" element={<CleanUp />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
