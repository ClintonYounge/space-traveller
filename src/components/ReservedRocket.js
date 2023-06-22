import { useSelector } from 'react-redux';

export default function JoinedMissions() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    rockets.map((rockets) => (
      rockets.reserved ? <li className="border-inherit border-1 list-none" key={rockets.id}>{rockets.name}</li> : null))
  );
}
