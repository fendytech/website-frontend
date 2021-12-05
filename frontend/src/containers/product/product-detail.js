import "./product-detail.scss";

export default function ProductDetail() {
    return (
        <>
            <div className="flex product-detail">
                <div className="product-left-section">
                    <img className='product-img' src="https://images.unsplash.com/photo-1612766985423-d063f992e7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
                </div>

                <div className="product-right-section">
                    <div className="product-title">
                        <b>Perfect Business Outfit for Men</b>
                    </div>
                </div>
            </div>
        </>
    );
}