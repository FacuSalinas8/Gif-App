import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  
//     const [images, setImages] = useState([]);

// quiero que esto se ejecute la instruccion cuando el componente es renderizado por primera vez
//   useEffect(() => {
//     getGifs(category)
//         .then(img => setImages(img));
// }, [category]);

    const {data:images,loading} = useFetchGifs(category);
    
    return (
        <>
            <h3 className="animate__animated animate__slideInLeft">{category}</h3>

            {loading&& <p className="animate__animated animate__backOutLeft">Loading</p>}

            <div className="card-grid">

                    {images.map(img => (
                        <GifGridItem key={img.id}{...img}
                        />
                    ))}
            
            </div>
        </>
    );
};
