import '../styles/Profile.css';
import JoinedMissions from './JoinedMissions';
import ReservedRocket from './ReservedRocket';

export default function Profile() {
  return (
    <section className="profile-container">
      <div className="joined-reserved">
        <h1>My Missions</h1>
        <ul className="joined-missions"><JoinedMissions /></ul>
      </div>
      <div className="joined-reserved">
        <h1>My Rockets</h1>
        <ul className="reserved-rockets"><ReservedRocket /></ul>
      </div>
    </section>
  );
}
