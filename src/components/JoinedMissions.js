import { useSelector } from 'react-redux';

export default function JoinedMissions() {
  const { missions } = useSelector((state) => state.missions);

  return (
    missions.map((mission) => (
      mission.joined ? <li key={mission.mission_id}>{mission.mission_name}</li> : null))
  );
}
