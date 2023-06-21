import { useSelector } from 'react-redux';

export default function JoinedMissions() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    rockets.map((rockets) => (
      rockets.reserved ? <li className="border-inherit border-2 list-none p-5" key={rockets.id}>{rockets.name}</li> : null))
  );
}
