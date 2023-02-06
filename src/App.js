import "./App.css";
import HamburgerMenu from "./components/HamburgerMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Notfound from "./Notfound";
import Portfolio from "./components/Pages/Portfolio";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/Login";
import Carousel from "./components/Pages/CarouselContainer";
import BIO from "./components/Pages/BIO";
import Car from "./components/Pages/Car";
import Sushi from "./components/Pages/Sushi";
import MainPage from "./components/Pages/MainPage";
import Projects from "./components/Pages/Projects";
import ToDo from "./components/Todo/ToDoList";
import Security from "./components/Pages/Security";
import Info from "./components/Pages/Info";
import Fetch from "./components/Pages/FetchTest";
import "bootstrap/dist/css/bootstrap.min.css";
import Galery from "./components/Pages/Galery";
import Galery2 from "./components/Pages/Galery2";
import BlueMain from "./components/Pages/BlueCollar/BlueMain";
import Apies from "./components/Pages/Api";
function App() {
  return (
    <>
      <Router>
        <HamburgerMenu />
        <div className='pages'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/blog' component={Blog} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/carousel' component={Carousel} />
            <Route path='/bio' component={BIO} />
            <Route path='/car' component={Car} />
            <Route path='/userapi' component={Apies} />
            <Route path='/mainbar' component={Sushi} />
            <Route path='/home' component={MainPage} />
            <Route path='/projects' component={Projects} />
            <Route path='/todo' component={ToDo} />
            <Route path='/security' component={Security} />
            <Route path='/updateInfo' component={Info} />
            <Route path='/fetch' component={Fetch} />
            <Route path='/gallery' component={Galery} />
            <Route path='/gallery2' component={Galery2} />
            <Route path='/bluecollar' component={BlueMain} />
            <Route path='*' component={Notfound} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
