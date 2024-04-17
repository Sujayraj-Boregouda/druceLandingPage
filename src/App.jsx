import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import Lettings from './components/Lettings/Lettings';
import Rent from './components/Rent/Rent';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="/" element={<Home />} />
      <Route path="lettings" element={<Lettings/>} />
      <Route path="rent" element={<Rent />} /> 
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />;
}

export default App;