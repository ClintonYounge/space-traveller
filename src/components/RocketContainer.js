import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rockets from './Rockets';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

export default function RocketsContainer() {
  const {
    rockets, isLoading, error,
  } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (isLoading) {
    return (
      <p>Loading...</p>
    );
  }

  if (error !== undefined) {
    return 'Error... something went wrong';
  }

  return (
    rockets.map((rockets) => (
      <Rockets
        key={rockets.rocketId}
        missionId={rockets.rocketId}
        rocket_name={rockets.rocketName}
        description={rockets.description}
        flickr_images={rockets.flickrImages}
        reserved={rockets.reserved}
      />
    ))
  );
}
