export default function Missions({
  mission_id,
  mission_name,
  description,
  mission_joined,
}) {
  
  return (
    <ul id={mission_id}>
        <li>Name: {mission_name}</li>
        <li>Description: {description}</li>
        <li>{mission_joined ? "Active Member" : "Not A Member"}</li>
        <li>{
            mission_joined ? <button>Leave Mission</button> : <button>Join Mission</button>}
        </li>
    </ul>
  );
}
