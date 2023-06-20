import '../styles/Profile.css';
import JoinedMissions from './JoinedMissions';

export default function Profile() {
  return (
    <section>
      <div>
        <h1>My Missions</h1>
        <JoinedMissions />
      </div>
      <div>
        <h1>My Rockets</h1>
      </div>
    </section>
  );
}
