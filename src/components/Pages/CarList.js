import Car from "./CarItems";
import "../style/Car.css";
const CarList = ({ carList, searchTerm }) => {
  return (
    <div>
      {carList.map((car, index) => {
        return (
          <Car
            key={index}
            carCompany={car.car_company}
            carModel={car.car_model}
            carYear={car.car_year}
          />
        );
      })}
    </div>
  );
};

export default CarList;
