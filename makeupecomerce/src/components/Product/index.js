import React from 'react';

import Nav from '../nav'

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "default",
            price: "default"
        }

    }

    handlePriceDropdownSelect = (event) => {
        this.setState({
            price: event.target.value,
            type: event.target.value
        })
    }

    render () {
        const { type, price} = this.state;


        return (
            <>
                <Nav />
                <h1>Jackie Product</h1>
                <div id="myBtnContainer">
            <label style={{padding: "10px"}}>Filter by Product Type: </label>
            <select id="type" value={type} onChange={this.handlePriceDropdownSelect}>
                <option value="default">Show All</option>
                <option value="lipstick">Lipstick</option>
                <option value="eyeshadow">Systems</option>
                <option value="blush">Accessories</option>
            </select>
            <label style={{padding: "10px"}}>Filter by Price: </label>
            <select id="price" value={price} onChange={this.handlePriceDropdownSelect}>
                <option value="default">Show All</option>
                <option value="price20to60">$20-$60</option>
                <option value="priceOver60">Over $60</option>
                <option value="priceUnder20">Under $20</option>
            </select>

               {/* Filter */}
               <div className="container">
                {data.map( (ItemInfo, index) => {
                    if ( cost === "default" && type === "default" ) {
                        return <Card product={ItemInfo} />
                    } else if ( cost === ItemInfo.cost || type === ItemInfo.type ) {
                        return <Card product={ItemInfo} />
                    } else if ( cost === ItemInfo.cost && type === ItemInfo.type ){
                        return <Card product={ItemInfo} />
                    }
                })}

                </div>
        </div>
            </>
        )
    }
}
export default Product;