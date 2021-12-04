import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../home/home";
import Footer from "../../components/footer/footer";
import SubCategoryScreen from "../app/SubCategory/SubCategory";
// import ProductScreen from "../ProductScreen";
// import CartScreen from "../CartScreen";

const Main = () => {
    const footerRef = useRef();
    const [footerHeight, setFooterHeight] = useState(100);

    useEffect(() => {
        if (footerRef.current?.clientHeight) {
            setFooterHeight(footerRef.current.clientHeight)
        }
    }, [footerRef.current]);

    console.log(footerHeight);

    return (
        <section style={{ height: '100vh', background: 'white', overflow: 'auto' }}>
            <div style={{ minHeight: `calc(100% - ${footerHeight}px)` }}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path='/subcategory' component={SubCategoryScreen} />
                        {/* <Route exact path="/product/:id" component={ProductScreen} />
                    <Route exact path="/cart" component={CartScreen} /> */}
                    </Switch>
                </Router>
            </div>
            <Footer ref={footerRef} />
        </section>
    );
}

export default Main;