import {
    CREATE_PROJECT,
    DELETE_PROJECT,
    REMOVE_SELECTED_PROJECT,
    SET_SELECTED_PROJECT,
    UPDATE_PROJECT,
} from "../actions/types";

const initialState = {
    projects: [],
    selectedProject: null,
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
        case UPDATE_PROJECT:
            return {
                ...state,
                projects: state.projects.map((project) =>
                    project.projectId === payload.projectId
                        ? { ...payload }
                        : project
                ),
            };
        case SET_SELECTED_PROJECT:
            return {
                ...state,
                selectedProject: { ...payload },
            };
        case REMOVE_SELECTED_PROJECT:
            return {
                ...state,
                selectedProject: null,
            };
        default:
            return state;
    }
};
export default projectReducer;
