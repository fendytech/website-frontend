import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components'

// Components
import Navbar from "../../components/navbar/Navbar";
// import SideDrawer from "../../components/SideDrawer";
// import Backdrop from "../../components/Backdrop";

// Screens
import HomeScreen from "../HomeScreen";
import { Login } from "../../components/login-signup/login";
import Category from "../../components/category-finder/Category";
import SubCategoryScreen from "./SubCategory/SubCategory";
// import ProductScreen from "../ProductScreen";
// import CartScreen from "../CartScreen";

const Main = styled.section`
height: 100vh;
`;

function App() {
  // const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
       <Navbar/>
       <Category/>
     {/* <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} /> */}
      <Main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/subcategory' component={SubCategoryScreen}/>
          {/* <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} /> */}
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
