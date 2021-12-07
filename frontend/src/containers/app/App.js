import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
// import SideDrawer from "../../components/SideDrawer";
// import Backdrop from "../../components/Backdrop";

// Screens
import { Login } from "../../components/login-signup/login";
import Main from "../main/main";

// const Main = styled.section`
// height: 100vh;
// background: white;
// `;

function App() {
  // const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
     {/* <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} /> */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Main} />
        </Switch>
    </Router>
  );
}

export default App;
