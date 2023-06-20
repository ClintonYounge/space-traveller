import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Missions from './Missions';
import { fetchMissions } from '../redux/rockets/rocketsSlice';

export default function RocketsContainer() {
  const {
    rockets, isLoading, error,
  } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
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
        rocketName={rockets.rocket_name}
        description={rockets.description}
        flickr_images = {rockets.flickr_images}
        reserved={rockets.reserved}
      />
    ))
  );
}
