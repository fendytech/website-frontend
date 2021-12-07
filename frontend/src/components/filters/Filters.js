import { Slider } from "antd";

function Filters() {
  return (
    <div style={{width:"2em" , boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
        <div>
            Filters
        </div>
        <div style={{height:"2px", background:"grey" }}>
        </div>
        <div>
            Price
        </div>
        <Slider range step={10} defaultValue={[20, 50]} />
        <div>
          Color
        </div>
        <div style={{display:"flex"}}>
          <div style={{ height:"12px",width:"12px",borderRadius:"50%" , background:"black" , margin:"5px"}}/>
          <div style={{ height:"12px",width:"12px",borderRadius:"50%" , background:"black" , margin:"5px"}}/>
          <div style={{ height:"12px",width:"12px",borderRadius:"50%" , background:"black" , margin:"5px"}}/>
          <div style={{ height:"12px",width:"12px",borderRadius:"50%" , background:"black" , margin:"5px"}}/>
        </div>
        <div>
          Offer
        </div>
        <div>
          >10%
        </div>
    </div>
  );
};

export default Filters;