import { 
  BEGIN_DELETING, 
  BEGIN_EDITING,
  CANCEL_DELETING, 
  RECEIVE_ONE_FRAME 
} from "../actions/frame_actions";


const flagReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_FRAME:
      let flags = Object.assign(
        {},
        state,
        ({
          'editing': false,
          'deleting': false
        })
      );
      return flags;
    case CANCEL_DELETING:
        let flagsAndNoDelete = Object.assign(
          {},
          state,
          ({
          'deleting': false,
          })
      );
      return flagsAndNoDelete;
    case BEGIN_EDITING:
      let flagsAndEdit = Object.assign(
            {},
            state,
            ({
            'editing': true,
            })
        );
        return flagsAndEdit;
    case BEGIN_DELETING:
      let flagsAndDeleting = Object.assign(
        {},
        state,
        ({
        'deleting': true,
        })
    );
  return flagsAndDeleting;
    default:
      return state;
    }
  };

export default flagReducer;
