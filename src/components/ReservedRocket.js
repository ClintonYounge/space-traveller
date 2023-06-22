import { useSelector } from 'react-redux';

export default function JoinedMissions() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    rockets.map((rockets) => (
<<<<<<< Updated upstream
      rockets.reserved ? <li className="reserved-rocket" key={rockets.id}>{rockets.name}</li> : null))
=======
      rockets.reserved ? <li className="border-inherit border-1 list-none" key={rockets.id}>{rockets.name}</li> : null))
>>>>>>> Stashed changes
  );
}
