import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

export default function Missions({
  missionId,
  missionName,
  description,
  joined,
}) {
  const dispatch = useDispatch();

  const handleJoin = () => {
    dispatch(joinMission(missionId));
  };
  const handleLeave = () => {
    dispatch(leaveMission(missionId));
  };
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
      <li>{joined ? 'Active Member' : 'Not A Member'}</li>
      <li>
        {
            joined ? (
              <button type="button" className="missions-btn" onClick={handleLeave}>Leave Mission</button>
            ) : (
              <button type="button" className="missions-btn" onClick={handleJoin}>Join Mission</button>
            )
        }
      </li>
    </ul>
  );
}

Missions.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};
