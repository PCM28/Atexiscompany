import "./TypeOfTrip.scss";
function TypeOfTrip(props) {
  function handleTypeOfTrip(event) {
    console.log(event.target.value);
    if (event.target.value === "One-way") {
      props.setOneWayTrip(true);
    } else {
      props.setOneWayTrip(false);
    }
  }
  return (
    <select className="type" onChange={handleTypeOfTrip}>
      {props.typeOfTrip.map((element, index) => (
        <option key={index}>{element}</option>
      ))}
    </select>
  );
}
export default TypeOfTrip;
