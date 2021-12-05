import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../home/home";
import Footer from "../../components/footer/footer";
import SubCategoryScreen from "../app/SubCategory/SubCategory";
import Navbar from "../../components/navbar/Navbar";
import ProductDetail from "../product/product-detail";
import ProductComponent from "../../components/product-component/ProductComponent";
// import ProductScreen from "../ProductScreen";
// import CartScreen from "../CartScreen";

const Main = () => {
    const footerRef = useRef();
    const [footerHeight, setFooterHeight] = useState(100);

    useEffect(() => {
        if (footerRef.current?.clientHeight) {
            setFooterHeight(footerRef.current.clientHeight)
        }
    }, [footerRef.current?.clientHeight]);

    return (
        <section style={{ height: '100vh', background: 'white', overflow: 'auto' }}>
            <div style={{ minHeight: `calc(100% - ${footerHeight}px)` }}>
                <Navbar />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path='/subcategory' component={SubCategoryScreen} />
                        <Route exact path='/product-detail/:id' component={ProductDetail} />
                        <Route exact path="/product/:id" component={ProductComponent} />
                    </Switch>
                </Router>
            </div>
            <Footer ref={footerRef} />
        </section>
    );
}

export default Main;