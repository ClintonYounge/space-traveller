import PropTypes from 'prop-types';

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

Missions.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  missionJoined: PropTypes.bool.isRequired,
};
