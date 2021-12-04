import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../home/home";
import Footer from "../../components/footer/footer";
import SubCategoryScreen from "../app/SubCategory/SubCategory";
// import ProductScreen from "../ProductScreen";
// import CartScreen from "../CartScreen";

const Main = () => {
    return (
        <section style={{ height: '100vh', background: 'white' }}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path='/subcategory' component={SubCategoryScreen} />
                    {/* <Route exact path="/product/:id" component={ProductScreen} />
                    <Route exact path="/cart" component={CartScreen} /> */}
                </Switch>
            </Router>

            <Footer/>
        </section>
    );
}

export default Main;