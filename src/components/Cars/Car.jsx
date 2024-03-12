const Car = ({ car, addToCard }) => {
    const { car_name, brand_name, price, image, id } = car;
    return (
        <div className="text-center border-2 rounded-2xl flex flex-col justify-center items-center">
            <img width="300px" src={image} alt="" />
            <p className="text-2xl font-bold">{car_name}</p>
            <p>{brand_name}</p>
            <p className=" font-bold">${price}</p>
            <button onClick={() => addToCard(car)} className="border-2 border-yellow-400 px-3 py-2 my-5 rounded-2xl">
                Add Card
            </button>
        </div>
    );
};

export default Car;
