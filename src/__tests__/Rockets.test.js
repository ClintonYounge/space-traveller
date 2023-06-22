import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Rockets from '../components/Rockets';
import { reserveRocket, cancelReserve } from '../redux/rockets/rocketsSlice';

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

  const rocket = {
    rocketId: 'rocket1',
    rocketName: 'Falcon 9',
    description: 'Rocket description',
    flickrImages: ['image1.jpg', 'image2.jpg'],
    reserved: true,
  };

  test('renders rocket information correctly', () => {
    const { getByText, getByAltText } = render(<Rockets {...rocket} />);

    expect(getByText('Falcon 9')).toBeInTheDocument();
    expect(getByText('Rocket description')).toBeInTheDocument();
    expect(getByAltText('planet-img')).toHaveAttribute('src', 'image1.jpg');
  });

  test('displays "Reserved" when reserved prop is true', () => {
    const { getByText } = render(<Rockets {...rocket} />);

    expect(getByText('Reserved')).toBeInTheDocument();
  });

  test('displays "Reserve Rocket" button and dispatches reserveRocket action when clicked', () => {
    const { getByText } = render(<Rockets {...rocket} reserved={false} />);

    const reserveButton = getByText('Reserve Rocket');
    fireEvent.click(reserveButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(reserveRocket).toHaveBeenCalledWith('rocket1');
  });

  test('displays "Cancel Reservation" button and dispatches cancelReserve action when clicked', () => {
    const { getByText } = render(<Rockets {...rocket} reserved={true} />);

    const cancelButton = getByText('Cancel Reservation');
    fireEvent.click(cancelButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(cancelReserve).toHaveBeenCalledWith('rocket1');
  });
});
