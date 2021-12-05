import { Button, Carousel } from "antd";
import { useState } from "react";
import "./product-detail.scss";

const imgs = [
    "https://images.unsplash.com/photo-1612766985423-d063f992e7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    "https://rukminim1.flixcart.com/image/880/1056/kjbr8280-0/suit/t/1/q/40-pmdp03887-o6-park-avenue-original-imafyx2hpfedgdzb.jpeg?q=50",
    "https://rukminim1.flixcart.com/image/714/857/kjbr8280-0/suit/e/h/v/40-pmdp03887-o6-park-avenue-original-imafyx2hjg4e7mqk.jpeg?q=50",
    "https://rukminim1.flixcart.com/image/714/857/kjbr8280-0/suit/h/k/t/40-pmdp03887-o6-park-avenue-original-imafyx2h2gnusgcg.jpeg?q=50"
]

export default function ProductDetail() {
    const [selectedImg, setSelectedImg] = useState(0);

    return (
        <>
            <div className="flex product-detail">
                <div className="product-left-section">

                    {
                        imgs?.length > 0 && imgs[selectedImg] &&
                        <img src={imgs[selectedImg]} alt="product-img" className="product-img" />
                    }
                    {
                        imgs?.length > 0 &&
                        <div className="product-img-slider">
                            {
                                imgs.map((url, urlIndex) =>
                                    <div className={urlIndex === selectedImg ? 'product-img-slider-selected-div' : 'product-img-slider-div'}>
                                        <img
                                            key={urlIndex}
                                            src={url}
                                            alt="product-img-inner"
                                            className='product-img-slider-img'
                                            onClick={() => setSelectedImg(urlIndex)}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    }
                </div>

                <div className="product-right-section">
                    <div className="product-title">
                        <b>Perfect Business Outfit for Men</b>
                    </div>

                    <div className="product-desc-div">
                        <div className="product-desc-head"><b>Includes:</b></div>

                        <div className="product-desc-item">
                            <div>
                                <div className="product-desc-item-title"><b>Raymond Blazer Black</b></div>
                                <div className='flex'>
                                    <div>Rs: 4999</div>
                                    <div className="product-desc-item-ap"><del>Rs: 7999</del></div>
                                </div>
                            </div>
                            <div className="align-center">
                                <div>Size</div>
                                <div className='product-desc-item-st'>M</div>
                            </div>
                        </div>

                        <div className="product-desc-item-separator" />

                        <div className="product-desc-item">
                            <div>
                                <div className="product-desc-item-title"><b>Raymond Blazer Black</b></div>
                                <div className='flex'>
                                    <div>Rs: 4999</div>
                                    <div className="product-desc-item-ap"><del>Rs: 7999</del></div>
                                </div>
                            </div>
                            <div className="align-center">
                                <div>Size</div>
                                <div className='product-desc-item-st'>M</div>
                            </div>
                        </div>

                        <div className="product-desc-footer-btns-div">
                            <Button className="add-to-cart-btn">Add to Cart</Button>
                        </div>

                    </div>

                </div>
            </div>

            <div className="product-desc">
                <div className="product-desc-head">Product Description</div>

                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </div>
            </div>

            <div className="product-desc">
                <div className="product-desc-head">SIMILAR STYLES</div>

                <div className="similar-style-product">
                    <img src={[imgs[1]]} alt="similar style" className="similar-style-product-img" />
                    <img src={[imgs[2]]} alt="similar style" className="similar-style-product-img" />
                    <img src={[imgs[3]]} alt="similar style" className="similar-style-product-img" />
                </div>
            </div>
        </>
    );
}