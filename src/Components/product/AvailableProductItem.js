import React from 'react'
import ProductItem from './ProductItem';
import "./AvailableProductItem.css"

const productArr = [
    {
        id: "m1",
        title: "Classic Tee",
        price: 19.99,
        imageUrl: "https://tbhai.com/cdn/shop/products/Iamnotoldi_mclassicTShirtTBhai.jpg?v=1658504642",
    },
    {
        id: "m2",
        title: "Vintage Jacket",
        price: 59.99,
        imageUrl: "https://cdn.pixelspray.io/v2/black-bread-289bfa/woTKH5/wrkr/t.resize(h:1000,w:820)/data/Superdry/13032023img/410381185001_1.jpg",
    },
    {
        id: "m3",
        title: "Slim Fit Jeans",
        price: 44.99,
        imageUrl: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/11035316/2019/12/12/db88ac98-9ac6-4a3c-a974-ff459c04613c1576140065411-DOLCE-CRUDO-Women-Blue-Skinny-Fit-High-Rise-Clean-Look-Stret-1.jpg",
    },
    {
        id: "m4",
        title: "Leather Boots",
        price: 79.99,
        imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230921/S7O4/650c2d1cddf7791519eeb27f/-473Wx593H-465263024-brown-MODEL.jpg",
    },
    {
        id: "m5",
        title: "Printed Dress",
        price: 29.99,
        imageUrl: "https://www.inddus.in/cdn/shop/products/floral-printed-embroidered-fit-flared-maxi-gown-474184.jpg?v=1698573362",
    },
    {
        id: "m6",
        title: "Wool Sweater",
        price: 39.99,
        imageUrl: "https://magicneedles.in/cdn/shop/files/Knitted-Self-Design-Pullover-3259-1.jpg?v=1686711424&width=823",
    },
    {
        id: "m7",
        title: "Casual Sneakers",
        price: 54.99,
        imageUrl: "https://www.jiomart.com/images/product/original/rviceeky8p/krors-smart-casual-sneakers-shoes-for-men-white-product-images-rviceeky8p-0-202211301309.jpg?im=Resize=(500,630)",
    },
    {
        id: "m8",
        title: "Leather Satchel",
        price: 89.99,
        imageUrl: "https://fossil.scene7.com/is/image/FossilPartners/ZB1772200_main?$sfcc_fos_large$",
    },
    {
        id: "m9",
        title: "Floral Skirt",
        price: 24.99,
        imageUrl: "https://www.sassafras.in/cdn/shop/products/SFSKRT3106-6_800x.jpg?v=1672416206",
    },
    {
        id: "m10",
        title: "Chino Shorts",
        price: 34.99,
        imageUrl: "https://www.jeanswest.com.au/dw/image/v2/BDXX_PRD/on/demandware.static/-/Sites-jeanswest-master-catalog/default/dwa357d828/images/MSO-13501/MSO-13501_01_IM_01_Merrick_Chino_Short_Stone.jpg?sw=488&sh=652",
    },
];


const AvailableProductItem = (props) => {
    const products = productArr.map((item) => <ProductItem getData={props.getData} key={item.id} id={item.id} title={item.title} price={item.price} image={item.imageUrl} />)

    return (
        <div>
            <div className='store'>
                <div className='productContainer'>{products}</div>
            </div>
        </div>

    )
}

export default AvailableProductItem
