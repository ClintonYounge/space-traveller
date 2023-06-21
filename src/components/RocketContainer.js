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
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets]);

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
        key={rockets.id}
        rocketId={rockets.id}
        rocketName={rockets.name}
        description={rockets.description}
        flickrImages={rockets.flickr_images}
        reserved={rockets.reserved}
      />
    ))
  );
}
