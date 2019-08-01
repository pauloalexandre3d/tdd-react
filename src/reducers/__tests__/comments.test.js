import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it('handels actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New comment']);
});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], 'UNKNOWN_TYPE');
    expect(newState).toEqual([]);
});