import { useState, useEffect } from "react";
import CarList from "./CarList";
import Accordion from "react-bootstrap/Accordion";
import MOCK_DATA from "./MOCK_DATA.json";

//css
import "../style/Car.css";
import PathNav from "./PagesComponents/PathNav";
const filterCars = (searchText, listOfCars) => {
  if (!searchText) {
    return listOfCars;
  }
  return listOfCars.filter(({ car_company }) =>
    car_company.toLowerCase().includes(searchText.toLowerCase())
  );
};
const data = MOCK_DATA;

function Car() {
  const [searchTerm, setSearchTerm] = useState("");
  const [carList, setCarList] = useState(data);
  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data);
      setCarList(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  return (
    <div className='Auto'>
      <div className='title-text'>Car Search</div>
      <div className='NavPath'>
        <PathNav pathtitle='Car search' />
      </div>
      <div className='Box-Car'>
        <input
          type='text'
          autoComplete='off'
          placeholder='Search car by Company "Audi"'
          onChange={(e) => setSearchTerm(e.target.value)}
          className='Input-car'
        />
        <Accordion id='boxList'>
          <Accordion.Item eventKey='0' id='questionBoxCar'>
            <Accordion.Header>
              {carList.length ? (
                <h1>Car List: {carList.length}</h1>
              ) : (
                <h1>Any cars found</h1>
              )}
            </Accordion.Header>
            <Accordion.Body>
              <CarList carList={carList} className='List-car' />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Car;
