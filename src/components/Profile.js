import '../styles/Profile.css';
import JoinedMissions from './JoinedMissions';
import ReservedRocket from './ReservedRocket';

export default function Profile() {
  return (
    <section className="profile-container">
      <div>
        <h1>My Missions</h1>
        <JoinedMissions />
      </div>
      <div>
        <h1>My Rockets</h1>
        <ReservedRocket />
      </div>
    </section>
  );
}
