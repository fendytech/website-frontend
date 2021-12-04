import { forwardRef } from "react";
import styled from "styled-components";

const Footer = forwardRef((props, ref) => {

    return (
        <>
            <div ref={ref} style={{ display: "flex" }}>
                <div>
                    <div> Online Shopping </div>
                    <div> Men </div>
                    <div> Women </div>
                    <div> Kids </div>
                </div>
                <div>
                    <div> Online Shopping </div>
                    <div> Men </div>
                    <div> Women </div>
                    <div> Kids </div>
                </div>
                <div>
                    <div> Follow us </div>
                </div>
            </div>
        </>
    );
});

export default Footer