import { forwardRef } from "react";
// import styled from "styled-components";

import "./footer.scss";

const Footer = forwardRef((props, ref) => {

    return (
        <>
            <div ref={ref} className="footer">
                <div>
                    <h2> Online Shopping </h2>
                    <div> Men </div>
                    <div> Women </div>
                    <div> Kids </div>
                </div>
                <div>
                    <h2>Useful Links</h2>
                    <div> FAQS </div>
                    <div> Privacy Policy </div>
                    <div> Terms & Conditions </div>
                </div>
                <div>
                    <h2> Follow us </h2>
                </div>
            </div>
        </>
    );
});

export default Footer