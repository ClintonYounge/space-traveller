// src/redux/components/BookContainer.js

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Missions from './Missions';
import { fetchMissions } from '../redux/missions/missionsSlice';

export default function MissionsContainer() {
  const { missions, isLoading, error, mission_joined } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (isLoading) {
    return (
      <p>Loading...</p>
    );
  }

  if (error !== undefined) {
    return 'Error... something went wrong';
  }

  return (
    missions.map((mission) => (
        <Missions
          mission_id={mission.mission_id}
          mission_name={mission.mission_name}
          description={mission.description}
          mission_joined={mission_joined}
        />
    ))
  )
}
