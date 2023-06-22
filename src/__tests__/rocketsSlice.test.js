import rocketsReducer, { fetchRockets } from '../redux/rockets/rocketsSlice';

test('reducers', () => {
  let state;
  state = rocketsReducer(undefined, fetchRockets.pending());
  expect(state.isLoading).toBe(true);
});

