import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Provider } from 'react-redux';
import store from './store/store.js';




//routes
import { addbook, updatebook } from './ApiManeger/Endpoint.js';
import PrivateRoute from './wrapper/Privateroute.jsx';
import Updatebook from './pages/Updatebook.page.jsx';



// Pages
import Test from './pages/Testpage.jsx';
import Homepage from './pages/Home.page.jsx';
import Loginpage from './pages/Login.page.jsx';
import Signuppage from './pages/Signup.page.jsx';
import App from './App.jsx';
import Addbook_page from './pages/Addbook.page.jsx';
import './index.css';

// Animation Wrapper Component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/login" 
          element={
            <PageWrapper>
              <Loginpage />
            </PageWrapper>
          } 
        />
        <Route 
          path="/" 
          element={
            
            <PageWrapper>
              <PrivateRoute>
              <Homepage  />
                
              </PrivateRoute>
            </PageWrapper>
          } 
        />
        <Route 
          path="/signup" 
          element={
            <PageWrapper>
              <Signuppage />
            </PageWrapper>
          } 
        />


        <Route
        path={'/addbook'}
        element={
          <PageWrapper>
            <Addbook_page/>

          </PageWrapper>
        }
        />
        <Route
        path={`${updatebook}/:id`}
        element={
          <PageWrapper>
            <Updatebook/>

          </PageWrapper>
        }
        />

        <Route
        
        path="/test"
        element={
          <PageWrapper>
          <Test/>

        </PageWrapper>
        }
        />

      </Routes>
    </AnimatePresence>
  );
};

// PageWrapper for animations
const PageWrapper = ({ children }) => (
  <motion.div
    style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 1.0 }}
  >
    {children}
  </motion.div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
    <BrowserRouter>
     


      <AnimatedRoutes />
     
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
