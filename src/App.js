import './App.css';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import MovieList from './containers/MovieList';
import { Routes,Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail'
import ProtectedRoute from './components/ProtectedRoute';
import MovieFinded from './containers/MovieFinded';
import Login from './containers/Login';
import Register from './containers/Register';
import NoMatch from './containers/NoMatch';
import Pricing from './containers/Pricing';
import Subscribed from './containers/Subscribed';
import About from './containers/About';

function App() {
  return (
    <div className="App">
      <div><Navbar /></div>
      
      <Routes>
        <Route path="/" element={
          // <ProtectedRoute>
            <MovieList />
          // </ProtectedRoute>
        } />
        <Route path="login" element={
          <ProtectedRoute loginOnly={false}>
            <Login />
          </ProtectedRoute>} />
        <Route path="register" element={
          <ProtectedRoute loginOnly={false}>
            <Register />
          </ProtectedRoute>} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/detail/:id" element={
          <ProtectedRoute>
            <MovieDetail />
          </ProtectedRoute>
        } />
        <Route path="search/:movie" element={<MovieFinded/>}/>
        <Route path="about" element={<About/>} />
        <Route path="indonesian" element={<div style={{margin: "10px"}}>Indonesian</div>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="subscribed/:plan" element={<Subscribed/>}/>
        <Route path="subscribed/" element={<Subscribed/>}/>
        
      </Routes>
      <div><Footer/></div>
      
    </div>
  );
}


export default App;
