import configureStore from '../store/store';
import RootReducer from '../reducers/root_reducer';

const mockedUser = {
  id: 1,
  email: 'jasperone@torrino',
  username: 'Jasperone',
  created_at: '2018-05-17T09:04:03.204Z',
  updated_at: '2018-05-17T09:04:03.204Z',
};

jest.mock('../reducers/root_reducer', () => {
  return jest.fn((oldState, action) => ({
    reports: { [mockedUser.id]: mockedUser },
  }));
});

describe('Store', () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  afterEach(() => {
    RootReducer.mockClear();
  });

  it('should export a configureStore function', () => {
    expect(typeof configureStore).toEqual('function');
  });

  it('the exported function should create a store when invoked', () => {
    expect(store.getState()).toEqual({
      reports: { [mockedUser.id]: mockedUser },
    });
  });

  it('passes dispatched objects the the reducer', () => {
    store.dispatch({ type: 'TESTING_REDUCER' });

    // RootReducer should be called twice: when the store is configured
    // and when the object is dispatched.
    expect(RootReducer).toHaveBeenCalledTimes(2);
  });

  it('creates a store with thunk middleware', () => {
    store.dispatch(dispatch => {});

    // RootReducer should only be called once: when the store is
    // configured.
    expect(RootReducer).toHaveBeenCalledTimes(1);
  });
});
