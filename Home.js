import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img  className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            
            <div className="home__row">
                    
                    <Product 
                        id="124"
                        title="Acer Aopen 21.5 inch Full HD 1920 X 1080 Resolution Backlit LED LCD Monitor - 200nits Brightness -HDMI and VGA Port - 22CH1Q"
                        price={10000}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg" 
                        rating={5}/>
                    <Product 
                        id="234"
                        title="Samsung Galaxy M32 5G (Sky Blue, 6GB RAM, 128GB Storage) INR 2000 Off on ICICI Bank Credit Cards"
                        price={2000} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/413B3aiSBdL._SX300_SY300_QL70_FMwebp_.jpg" 
                        rating={4}
                    />
                   
                    

            </div>
            <div className="home__row">
                <Product  
                    id="3456"
                    title="Logitech M331 Silent Plus Wireless Mouse, 2.4GHz with USB Nano Receiver, 1000 DPI Optical Tracking, 3 Buttons, 24 Month Life Battery, PC/Mac/Laptop - Red"
                    price={700} 
                    image="https://images-eu.ssl-images-amazon.com/images/I/31N2n4tGvGL._SX300_SY300_QL70_FMwebp_.jpg" 
                    rating={4}
                />
                <Product 
                    id="67456"
                    title="(CERTIFIED REFURBISHED) Pebble Zest BassBuds Wired Earphones with Inbuilt Mic (White)" 
                    price={1000}
                    image="https://images-eu.ssl-images-amazon.com/images/I/31x8PG7bkpL._SX300_SY300_QL70_FMwebp_.jpg" 
                    rating={5}
                />
                <Product 
                     id="3456" 
                    title="Lenovo ThinkPad E15 (2021) Intel Core i5 11th Gen 15.6-inch (39.62 cm)FHD Thin and Light Laptop (8GB RAM/512GB SSD/Windows 10/MS Office/Fingerprint Reader/Black/Aluminium" 
                    price={39.320} 
                    image="https://m.media-amazon.com/images/I/61Gnrgw0mrL._AC_UL320_.jpg" 
                    rating={5}
                />
                   
                

            </div>
            <div className="home__row">
                    <Product 
                        id="4536345"
                        title="Quantum QHM7307 Mini Spill-Resistant USB Wired Slim Keyboard with Chocolate Keys Having 10 Million keystrokes for Laptop/Desktop (Black)"
                        price={39.320}
                        image="https://m.media-amazon.com/images/I/41KKyYw5hyS.jpg" 
                        rating={5} 
                    />

            </div>
            
            </div> 
        </div>
    )
}

export default Home
