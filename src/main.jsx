import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App.jsx'
import SignIn from './pages/SignIn.jsx'
import User from './pages/User.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
)