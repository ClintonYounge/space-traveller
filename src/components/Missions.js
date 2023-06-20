export default function Missions({
  missionId,
  missionName,
  description,
  missionJoined,
}) {
  return (
    <ul id={missionId}>
      <li>
        Name:
        {missionName}
      </li>
      <li>
        Description:
        {description}
      </li>
      <li>{missionJoined ? 'Active Member' : 'Not A Member'}</li>
      <li>
        {
            missionJoined ? <button type="button">Leave Mission</button> : <button type="button">Join Mission</button>
}
      </li>
    </ul>
  );
}
