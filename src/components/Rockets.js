import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReserve } from '../redux/rockets/rocketsSlice';

export default function Rockets({
  rocketId,
  rocketName,
  description,
  flickrImages,
  reserved,
}) {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveRocket(rocketId));
  };
  const handleCancel = () => {
    dispatch(cancelReserve(rocketId));
  };
  return (
    <div className="flex flex-col">
      <div id={rocketId} className="flex flex-row">
        <div>
          <img src={flickrImages} className="img" alt="planet-img" />
        </div>
        <div>
          <h2>{rocketName}</h2>
          <p>{reserved ? 'Reserved' : ''}</p>
          <p>{description}</p>
          {
              reserved ? <button type="button" onClick={handleCancel}>Cancel Reservation</button> : <button type="button" onClick={handleReserve}>Reserve Rocket</button>
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
