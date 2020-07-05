const initState = {
    login: "",
    username: "",
    repos: [],
    loading: true

};

const reducer = (state = initState, action) => {
    if (action.type === "CHANGE") {
        let currentUsername = (action.e.target.value)
        return {
            ...state,
            username: currentUsername,
        }
    } else if (action.type === "SUBMIT") {
        console.log(action.data)
        return {
            ...state,
            repos: action.data.repos,
            // login: action.data.owner?.login,
        }
        // loading: action.data.loading

    }

    return state
}
export default reducer;