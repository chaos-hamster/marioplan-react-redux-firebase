export const createProjectAction = (project) => {
    return (dispatch, getState) => {
        // make async call to db
        console.log('createProjectAction:', project);
        dispatch({type: 'project/create', payload: project})
    }
}