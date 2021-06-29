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
        case CREATE_PROJECT:
            return {
                ...state,
                projects: [payload, ...state.projects],
            };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(
                    (project) => project.projectId !== payload
                ),
            };
        default:
            return state;
    }
};
export default projectReducer;
