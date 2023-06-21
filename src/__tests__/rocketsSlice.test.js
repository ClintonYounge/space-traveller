import fetchRockets from '../redux/rockets/rocketsSlice';

test('reducers', () => {
    let state;
    state = fetchRockets({ rockets: { rockets: [], isLoading: false, reserved: false }, missions: { missions: [], isLoading: false, joined: false } }, { type: 'rockets/fetchRockets/pending', meta: { requestId: 'NDzFUQLJDYav9nD7E6OAK', requestStatus: 'pending' } });
    expect(state).toEqual({ rockets: { rockets: [], isLoading: true, reserved: false }, missions: { missions: [], isLoading: false, joined: false } });
});
