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
        <div className="m-4">
          <img src={flickrImages} className="img w-64 h-64" alt="planet-img" />
        </div>
        <div>
          <h2 className="text-black">{rocketName}</h2>
          <span className="bg-teal-500 text-white rounded-xl font-bold p-1">{reserved ? 'Reserved' : ''}</span>
          <p>{description}</p>
          {
              reserved ? <button className="border-2 border-slate-200 border-black text-slate-400 rounded-xl p-2" type="button" onClick={handleCancel}>Cancel Reservation</button> : <button className="bg-blue-600 text-white rounded-xl p-2" type="button" onClick={handleReserve}>Reserve Rocket</button>
            }
        </div>
      </div>
    </div>
  );
}

Rockets.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketName: PropTypes.string,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  reserved: PropTypes.bool,
};

Rockets.defaultProps = {
  rocketName: '',
  reserved: false,
};
