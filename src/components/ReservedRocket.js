import { useSelector } from 'react-redux';

export default function JoinedMissions() {
    const { rockets } = useSelector((state) => state.rockets);

    return (
        rockets.map((rockets) => (
            rockets.joined ? <li key={rockets.rocketId}>{rockets.rocketName}</li> : null))
    );
}
