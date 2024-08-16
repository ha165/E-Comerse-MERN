import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import summaryApi from './common';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import { setUserDetails } from './store/userSlice';
import Context from './context';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    try {
      const dataResponse = await fetch(summaryApi.current_user.url, {
        method: summaryApi.current_user.method,
        credentials: 'include',
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data));
      }
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <Context.Provider value={{ fetchUserDetails }}>
      <ToastContainer position="top-center" />
      <Header />
      <main className="min-h-[calc(100vh-120px)] pt-16">
        <Outlet />
      </main>
      <Footer />
    </Context.Provider>
  );
}

export default App;
