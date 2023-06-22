import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Rockets from '../components/Rockets';
import { reserveRocket, cancelReserve } from '../redux/rockets/rocketsSlice';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../redux/rockets/rocketsSlice', () => ({
  reserveRocket: jest.fn(),
  cancelReserve: jest.fn(),
}));

describe('Rockets component', () => {
  const dispatchMock = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders rocket information correctly', () => {
    const { getByText } = render(
      <Rockets
        rocketId="rocket1"
        rocketName="Falcon 9"
        description="Rocket description"
        reserved={false}
        flickrImages={['image1.jpg']}
      />,
    );

    expect(getByText('Falcon 9')).toBeInTheDocument();
    expect(getByText('Rocket description')).toBeInTheDocument();
  });

  test('displays "Reserved" when reserved prop is true', () => {
    const { getByText } = render(
      <Rockets
        rocketId="rocket1"
        rocketName="Falcon 9"
        description="Rocket description"
        reserved
        flickrImages={['Image 1', 'Image 2']}
      />,
    );

    expect(getByText('Reserved')).toBeInTheDocument();
  });

  test('displays "Reserve Rocket" button and dispatches reserveRocket action when clicked', () => {
    const { getByText } = render(
      <Rockets
        rocketId="rocket1"
        rocketName="Falcon 9"
        description="Rocket description"
        reserved={false}
        flickrImages={['Image 1', 'Image 2']}
      />,
    );

    const reserveButton = getByText('Reserve Rocket');
    fireEvent.click(reserveButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(reserveRocket).toHaveBeenCalledWith('rocket1');
  });

  test('displays "Cancel Reservation" button and dispatches cancelReserve action when clicked', () => {
    const { getByText } = render(
      <Rockets
        rocketId="rocket1"
        rocketName="Falcon 9"
        description="Rocket description"
        reserved
        flickrImages={['Image 1', 'Image 2']}
      />,
    );

    const cancelButton = getByText('Cancel Reservation');
    fireEvent.click(cancelButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(cancelReserve).toHaveBeenCalledWith('rocket1');
  });
});
