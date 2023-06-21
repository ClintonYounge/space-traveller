import reducers from '../../reducers';

test('reducers', () => {
    let state;
    state = reducers({ rockets: { rockets: [], isLoading: false, reserved: false }, missions: { missions: [], isLoading: false, joined: false } }, { type: 'rockets/fetchRockets/pending', meta: { requestId: 'NDzFUQLJDYav9nD7E6OAK', requestStatus: 'pending' } });
    expect(state).toEqual({ rockets: { rockets: [], isLoading: true, reserved: false }, missions: { missions: [], isLoading: false, joined: false } });
});
