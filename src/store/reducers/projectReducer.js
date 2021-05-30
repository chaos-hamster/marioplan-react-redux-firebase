const initialState = [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'},
    ];

function nextProjectId(projects) {
    const maxId = projects.reduce((maxId, project) => Math.max(project.id, maxId), -1)
    return maxId + 1
  }

const ProjectReducer = (state = initialState, { type, payload }) => {
    console.log(state, payload);
    switch (type) {

        case "project/create":
            return [...state,  { id: nextProjectId(state), title: payload.title, content: payload.content } ] 

        default:
            return state
    }
}

export default ProjectReducer;