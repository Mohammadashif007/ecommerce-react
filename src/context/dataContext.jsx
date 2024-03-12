import { createContext } from "react";

export const CarContext = createContext(null);

const DataContext = () => {
    return (
        <CarContext.Provider>
            
        </CarContext.Provider>
    );
};

export default DataContext;