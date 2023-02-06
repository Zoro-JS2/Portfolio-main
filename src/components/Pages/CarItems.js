import "../style/Car.css";
const Car = ({ carCompany, carModel, carYear }) => {
  return (
    <div className='Item-Car'>
      <div className='italic'>Company: {carCompany}</div>
      <div className='italic'>Model: {carModel}</div>
      <div className='italic'>Year: {carYear}</div>
    </div>
  );
};

export default Car;
