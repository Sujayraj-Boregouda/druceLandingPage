import React from 'react'
import Recommended from '../Recommended/Recommended'
import { recProp } from "../../database/recommended-properties"
import { propertyServices } from '../../database/property-services'
import Services from '../Services/Services';
import Offer from '../Offer/Offer';


export default function Overview() {
   
    const slides = [];
    recProp.forEach(property => {
        slides.push({
            imageUrl: property.banner,
            tag: property.tag, 
            className: property.class,
            title: property.title,
            address: property.address,
            rooms: property.rooms,
            bathrooms: property.bathrooms,
            squarefoot: property.squarefoot,
            rent: property.rent,
        });
    });

    const properties = [];
    propertyServices.forEach(property => {
        properties.push({
            imageUrl: property.banner,
            title: property.title, 
            desc: property.desc,
        });
    });

    return (
        <>
            <Offer/>
            <Recommended slides={slides}/>
            <Services properties={properties}/>
        </>
    )
}
