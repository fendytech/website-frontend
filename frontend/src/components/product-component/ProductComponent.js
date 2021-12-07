import { Icon, Rate } from "antd";

const ProductComponent = () => {
    return (
        <>
            <div style={{ textAlign: "center", width: "12em" ,height:"20em", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>

                <img src="https://picsum.photos/200/300" style={{
                    height: "15.5em",
                    objectFit: "cover"
                }}></img>

                <div style={{ fontWeight: "700" }}> Business Man Look</div>
                <Rate disabled defaultValue={2} style={{ fontSize: "smaller" }} />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div> Rs. 6999 <span style={{ fontSize: "x-small" }}> Rs. 10,999</span></div>
                    <div style={{ background: "grey", width: "2.1em" }}>
                        <Icon type="plus" style={{ color: "white" }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductComponent;