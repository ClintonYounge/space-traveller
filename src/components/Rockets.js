import PropTypes from 'prop-types';

export default function Rockets({
  rocketId,
  rocketName,
  description,
  flickrImages,
  reserved,
}) {
  return (
    <div className="flex flex-col">
      <div id={rocketId} className="flex flex-row">
        <div>
          <img src={flickrImages} className="img" alt="planet-img" />
        </div>
        <div>
          <h2>{rocketName}</h2>
          <p>{description}</p>
          {
              reserved ? <button type="button">Cancel Reservation</button> : <button type="button">Reserve Rocket</button>
            }
        </div>
      </div>
    </div>
  );
}

Rockets.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.element.isRequired,
  reserved: PropTypes.bool.isRequired,
};
