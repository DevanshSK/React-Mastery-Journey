import React, { useState } from 'react'
import products from "../../utils/data.jsx"
import "./style.css";
import { useMemo } from 'react';
import Sidebar from './sidebar/Sidebar.jsx';
import Card from './components/Card.jsx';
import Nav from './nav/Nav.jsx';
import Recommended from './recommended/Recommended.jsx';
import Products from './products/Products.jsx';

const EcommercePage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Input Filter
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }

    const filteredItems = products.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    // Radio Filtering
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Button Filtering
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    const resultData = useMemo(() => {
        let filteredProducts = products;

        // Filtering input items
        if (query) {
            filteredProducts = filteredItems;
        }

        // Filtering selected filter
        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selectedCategory ||
                    color === selectedCategory ||
                    company === selectedCategory ||
                    newPrice === selectedCategory ||
                    title === selectedCategory
            );
        }

        return filteredProducts.map(
            ({ img, title, star, reviews, prevPrice, newPrice }) => (
                <Card
                    key={Math.random()}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                />
            )
        );

    }, [selectedCategory, query, filteredItems])

    // function filteredData(products, selected, query) {
    //     let filteredProducts = products;

    //     // Filtering input items
    //     if (query) {
    //         filteredProducts = filteredItems;
    //     }

    //     // Filtering selected filter
    //     if (selected) {
    //         filteredProducts = filteredProducts.filter(
    //             ({ category, color, company, newPrice, title }) =>
    //                 category === selected ||
    //                 color === selected ||
    //                 company === selected ||
    //                 newPrice === selected ||
    //                 title === selected
    //         );
    //     }

    //     return filteredProducts.map(
    //         ({ img, title, star, reviews, prevPrice, newPrice }) => (
    //             <Card
    //                 key={Math.random()}
    //                 img={img}
    //                 title={title}
    //                 star={star}
    //                 reviews={reviews}
    //                 prevPrice={prevPrice}
    //                 newPrice={newPrice}
    //             />
    //         )
    //     );
    // }

    // const result = filteredData(products, selectedCategory, query);


    return (
        <>
            <Sidebar handleChange={handleChange} />
            <Nav query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleClick} />
            <Products result={resultData} />
        </>
    )
}

export default EcommercePage