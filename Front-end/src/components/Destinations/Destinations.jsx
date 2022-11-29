import "./Destinations.scss";
function Destinations(props) {
  console.log(props.setOriginTrip);
  function handleOrigin(event) {
    console.log(props.setOriginTrip);
    console.log(event.target.value);
    if (props.setOriginTrip !== undefined) {
      props.setOriginTrip(event.target.value);
    }
  }
  return (
    <select className="to">
      {props.cities.map((element, index) =>
        props.originTrip === element ? (
          props.originTrip === "" ? (
            <option key={index}>{element}</option>
          ) : (
            ""
          )
        ) : (
          <option key={index}>{element}</option>
        )
      )}
    </select>
  );
}
export default Destinations;
