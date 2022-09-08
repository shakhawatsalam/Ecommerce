import React from 'react'
import { client, urlFor } from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';
const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;
    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img src={urlFor(image && image[0])} alt="" className="product-detail-image" />
                    </div>
                    {/* <div className='small-images-container'>
                        {image?.map((item, i) => (
                            <img src={urlFor(item)}
                                alt=""
                                className=''
                                onMouseEnter=''
                            />
                        ))}
                    </div> */}
                </div>
                <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Details:</h4>
                    <p>{details}</p>
                    <p className='price'>${price}</p>
                    <div className='quantity'>
                        <h3>Quantity:</h3>
                        <p className='quantity-desc'>
                            <span className='minus' onClick=''>
                                <AiOutlineMinus />
                            </span>
                            <span className='minus' onClick=''>
                                0
                            </span>
                            <span className='plus' onClick=''>
                                <AiOutlinePlus />
                            </span>
                        </p>

                    </div>
                    <div className='buttons'>
                        <button type='button' className='add-to-cart' onClick=''>Add to Cart</button>
                        <button type='button' className='buy-now' onClick=''>Buy Now</button>
                    </div>
                </div>

            </div>

            {/* You may Also Like  */}
            <div className='maylike-products-wrapper'>
                <h2>You May also Like</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {
                            products.map((item) => (
                                <Product key={item.id}
                                    product={item}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};


export const getStaticPaths = async () => {
    const query = `*[_type == "product"]{
        slug{
            current
        }
    }
    `;
    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}
//fetching Product 
export const getStaticProps = async ({ params: { slug } }) => {
    // console.log(slug);
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { products, product }
    }
};

export default ProductDetails