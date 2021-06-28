import {
    CREATE_PROJECT,
    DELETE_PROJECT,
    UPDATE_PROJECT,
} from "../actions/types";

const initialState = {
    projects: [],
};

const projectReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        // case CREATE_PROJECT:
        //     return {
        //         ...state,
        //     };
        default:
            return state;
    }
};
export default projectReducer;
