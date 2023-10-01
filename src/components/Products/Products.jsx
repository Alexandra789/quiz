import {useEffect, useState} from "react";

import {API} from "../../store/api";

import './Products.css';
import {Pagination} from "../Pagination";

export const Products = () => {
    const [productsData, setProductsData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            if (!isLoading) {
                API("https://api.jsonbin.io/v3/b/6518989f54105e766fbc04c9")
                    .then(data => {
                        setProductsData(data.record);
                        setLoading(true);
                    })
                    .catch((err) => {
                        console.log(`Что-то пошло не так: ${err}`);
                    });
            }
        })();
    }, [isLoading]);

    const onLike = (e) => {
        e.currentTarget.classList.toggle('active');
    }

    return (
        <div className="products">
            {isLoading ?
                <div>
                    <div className="products-wrapper">
                        {productsData?.map(product => (
                            <div key={product.id} className="card">
                                <div className="card__img" onClick={(e) => {
                                    onLike(e)
                                }}>
                                    <img
                                        src={product.image}
                                        alt="product image"/>
                                </div>
                                <h3 className="card__title">{product.title}</h3>
                                <div className="card__price">
                                    {product.oldPrice &&
                                        <p className="card__price__discount">{product.oldPrice}</p>
                                    }
                                    <p className="card__price__current">{product.price}<span>руб</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination/>
                </div>
                : <div id="loader"></div>
            }

        </div>
    )
}