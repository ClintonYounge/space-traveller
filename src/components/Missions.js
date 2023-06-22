import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';
import '../styles/Missions.css';

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
    <ul id={missionId} className="mission-container">
      <li className="mission-name">{missionName}</li>
      <li className="mission-description">{description}</li>
      <li className="mission-status">
        {joined ? (
          <p className="member">Active Member</p>
        ) : (
          <p className="not-member">NOT A MEMBER</p>
        )}
      </li>
      <li className="mission-action">
        {joined ? (
          <button type="button" className="leave-mission-btn" onClick={handleLeave}>
            Leave Mission
          </button>
        ) : (
          <button type="button" className="join-mission-btn" onClick={handleJoin}>
            Join Mission
          </button>
        )}
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
