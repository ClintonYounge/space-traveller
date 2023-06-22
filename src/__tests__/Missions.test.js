import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Missions from '../components/Missions';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../redux/missions/missionsSlice', () => ({
  joinMission: jest.fn(),
  leaveMission: jest.fn(),
}));

describe('Missions component', () => {
  const dispatchMock = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders mission information correctly', () => {
    const { getByText } = render(
      <Missions
        missionId="mission1"
        missionName="Mission 1"
        description="Mission description"
        joined={false}
      />,
    );

    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission description')).toBeInTheDocument();
  });

  test('displays "Active Member" when joined prop is true', () => {
    const { getByText } = render(
      <Missions
        missionId="mission1"
        missionName="Mission 1"
        description="Mission description"
        joined
      />,
    );

    expect(getByText('Active Member')).toBeInTheDocument();
  });

  test('displays "Join Mission" button and dispatches joinMission action when clicked', () => {
    const { getByText } = render(
      <Missions
        missionId="mission1"
        missionName="Mission 1"
        description="Mission description"
        joined={false}
      />,
    );

    const joinButton = getByText('Join Mission');
    fireEvent.click(joinButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(joinMission).toHaveBeenCalledWith('mission1');
  });

  test('displays "Leave Mission" button and dispatches leaveMission action when clicked', () => {
    const { getByText } = render(
      <Missions
        missionId="mission2"
        missionName="Mission 2"
        description="Mission description 2"
        joined
      />,
    );

    const leaveButton = getByText('Leave Mission');
    fireEvent.click(leaveButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(leaveMission).toHaveBeenCalledWith('mission2');
  });
});
