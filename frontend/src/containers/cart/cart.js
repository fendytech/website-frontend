import React from 'react'
import { Button } from 'antd';
import './cart.scss';

const data = {
    cartData: [
        {
            id: "1",
            image: "https://cdn.shopify.com/s/files/1/0752/6435/products/B14_2025b646-5fce-4806-94c9-24671222800b_765x.jpg?v=1624388797",
            name: "Perfect Outfit for Business Man ",
            brand: "Raymond Collection",
            price: "6,999",
            mrp: "10,999",
            quantity: 1
        },
        {
            id: "2",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/4/KL/MT/XH/57926816/women-blazer-500x500.jpg",
            name: "Perfect Outfit for Business Woman",
            brand: "Raymond Collection",
            price: "6,999",
            mrp: "10,999",
            quantity: 1
        }
    ],
    totalPrice: "13,988",
    discount: "8,000",
    delivery: "0",
    totalMrp: "21,998"
}

function Cart() {
    return (
        <div className="flex cart">
            <div className="cart-left-section">
                <div className="cart-section">
                    <div className="heading">My Cart ( {data?.cartData?.length} ) </div>
                    {
                        data.cartData.map((item, index) => (
                            <div className="cart-item-section" key={item.id} style={index ? { borderTop: "1px solid #d9d9d9" } : {}}>
                                <img src={item.image} alt="" className="image" />
                                <div>
                                    <div style={{ fontSize: 18 }}>{item.name}</div>
                                    <div className="item-brand">{item.brand}</div>
                                    <div className="flex">
                                        <div style={{ marginRight: 12 }}>Rs. {item.price}</div>
                                        <div className="mrp">Rs. {item.mrp}</div>
                                    </div>
                                    <div>Quantity: {item.quantity}</div>
                                    <div className="flex" style={{ marginTop: 10 }}>
                                        <div style={{ fontSize: 14 }}>Move to Wishlist</div>
                                        <div className="separator" />
                                        <div style={{ fontSize: 14 }}>Remove</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="cart-right-section">
                <div className="cart-section">
                    <div className="heading">Price Details</div>
                    <div className="flex padding">
                        <div className="width-50">Price ( {data?.cartData?.length} Items )</div>
                        <div className="width-50">Rs. {data.totalMrp}</div>
                    </div>
                    <div className="flex padding">
                        <div className="width-50">Discount</div>
                        <div className="width-50">Rs. {data.discount}</div>
                    </div>
                    <div className="flex padding" style={{ borderBottom: '1px solid #d9d9d9' }}>
                        <div className="width-50">Delivery Charges</div>
                        <div className="width-50">Rs. {data.delivery}</div>
                    </div>
                    <div className="flex padding" style={{ paddingTop: 20 }}>
                        <div className="width-50">Total Amount</div>
                        <div className="width-50">Rs. {data.totalPrice}</div>
                    </div>
                    <Button type="danger" block className="button" size="large">
                        Place Order
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
