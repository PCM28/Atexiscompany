import "./Origins.scss";
function Origins(props) {
  function handleOrigin(event) {
    props.setOriginTrip(event.target.value);
  }
  return (
    <select className="from" onChange={handleOrigin} selectedIndex="-1">
      {props.cities.map((element, index) => (
        <option key={index}>{element}</option>
      ))}
    </select>
  );
}
export default Origins;
