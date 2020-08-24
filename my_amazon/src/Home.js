import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
	return (
		<div className="home">
			<img
				className="home_image"
				// src="https://cdn.systweak.com/content/wp/systweakblogsnew/uploads_new/2019/08/Blog-Cover-Best-Sci-fi-Shows-on-Amazon-Prime-.jpg"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt="Amazon banner ads"
			/>

			<div className="home_row">
				<Product
					id="121"
					title="The best book you have ever seen in your life"
					price={11.96}
					rating={5}
					image="https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg"
				/>
				<Product
					id="122"
					title="Here is NUTRO BULLET is coming for you"
					price={30.50}
					rating={4}
					image="https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/143105505/447da154353b7e2201ed2bc5c05d9a51.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=64090f4697af20f60310ff8aefd0f04f"
				/>
			</div>

			<div className="home_row">
				<Product
						id="123"
						title="New version of headphones BOSE"
						price={249.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/51sAtKgDkDL.jpg"
					/>
					<Product
						id="124"
						title="NEW Ember Temperature Control Smart Mug 2, Improved Design"
						price={20.75}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/61upNvOD-9L._AC_SL1500_.jpg"
					/>
					<Product
						id="125"
						title="Anker 2.4G Wireless Vertical Ergonomic Optical Mouse, PC, Macbook - Black"
						price={26.25}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/51j0zidX0VL._AC_SL1364_.jpg"
					/>
			</div>

			<div className="home_row">
				<Product
						id="126"
						title="MANHATTAN Slim Minimalist Bifold Wallet and Credit Card Holder with RFID Blocking and Ideal for Front Pocket"
						price={34.99}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/71ton5CpgdL._AC_UX385_.jpg"
					/>
			</div>
		</div>
	)
}

export default Home
