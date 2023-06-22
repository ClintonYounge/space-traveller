import { useSelector } from 'react-redux';

export default function JoinedMissions() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    rockets.map((rockets) => (
      rockets.reserved ? <li className="reserved-rocket" key={rockets.id}>{rockets.name}</li> : null))
  );
}
