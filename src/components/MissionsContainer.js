import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Missions from './Missions';
import { fetchMissions } from '../redux/missions/missionsSlice';
import '../styles/Missions.css';

export default function MissionsContainer() {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error !== undefined) {
    return 'Error... something went wrong';
  }

  return (
    <>
      <ul className="missions-container">
        <li className="mission">Mission</li>
        <li>Description</li>
        <li>Status</li>
        <li />
      </ul>
      <div>
        {missions.map((mission) => (
          <Missions
            key={mission.mission_id}
            missionId={mission.mission_id}
            missionName={mission.mission_name}
            description={mission.description}
            joined={mission.joined}
          />
        ))}
      </div>

    </>
  );
}
