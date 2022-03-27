// stylesheets
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

// external libraries
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {toast} from 'react-toastify'

//components
import Header from './components/shared/Header'
import Home from './components/home/Home'
import Categories from './components/categories/Categories'
import Registration from './components/registration/Registration'
import UserHome from './components/home/UserHome'
import Footer from './components/shared/Footer'

toast.configure()

function App() {
  return (
    <div className="App">
          <Router>
                <Header/>
                
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/categories" element={<Categories/>}/>     
                    <Route exact path="/user-home" element={<UserHome/>}/>     
                </Routes>
                <Footer/>
        </Router>
    </div>
  )
}

export default App;
