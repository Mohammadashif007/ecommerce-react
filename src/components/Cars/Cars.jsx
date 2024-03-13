const cars = [
    {
        id: 1,
        car_name: "Civic",
        brand_name: "Honda",
        price: 25000,
        image: "/src/assets/1.webp",
    },
    {
        id: 2,
        car_name: "Corolla",
        brand_name: "Toyota",
        price: 28000,
        image: "/src/assets/2.png",
    },
    {
        id: 3,
        car_name: "Accord",
        brand_name: "Honda",
        price: 30000,
        image: "/src/assets/3.webp",
    },
    {
        id: 4,
        car_name: "Camry",
        brand_name: "Toyota",
        price: 32000,
        image: "/src/assets/4.jpg",
    },
    {
        id: 5,
        car_name: "Fusion",
        brand_name: "Ford",
        price: 27000,
        image: "/src/assets/5.webp",
    },
    {
        id: 6,
        car_name: "Altima",
        brand_name: "Nissan",
        price: 29000,
        image: "/src/assets/6.jpg",
    },
    {
        id: 7,
        car_name: "Sonata",
        brand_name: "Hyundai",
        price: 26000,
        image: "/src/assets/7.webp",
    },
    {
        id: 8,
        car_name: "Impreza",
        brand_name: "Subaru",
        price: 31000,
        image: "/src/assets/8.webp",
    },
];

import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import Car from "./Car";
import {
    addToLocalStorage,
    getLocalStorage,
} from "../../utilities/localStorage";

const Cars = () => {
    const [card, setCard] = useState([]);

    // const data = async() => {
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     setCars(data);
    // }

    // useEffect(() => {
    //    data();
    // }, [])
    

    const addToCard = (car) => {
        const newCard = [...card, car];
        setCard(newCard);
        addToLocalStorage(car.id);

    };

    useEffect(() => {
        const storedCart = getLocalStorage();
        const newItem = [];
        for(const cartId of storedCart){
            const item = cars.find(x => x.id === cartId)
            newItem.push(item);

        }
        setCard(newItem);
        
    },[])

    
    return (
        <div className="flex gap-5">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2  w-3/5">
                {cars.map((car) => (
                    <Car key={car.id} car={car} addToCard={addToCard}></Car>
                ))}
            </div>
            <div className="w-4/12 bg-red-600">
                <h1>card {card.length}</h1>
                {card.map((item, idx) => (
                    <div key={item.id} className="flex justify-between p-6">
                        <p>{idx + 1}</p>
                        <img width="65px" src={item.image} alt="" />
                        <p>{item.car_name}</p>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cars;
