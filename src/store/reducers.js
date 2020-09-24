const stateInitial={
    theme:"white",
    propiedad:"dos",
}
export default  function reducer(state = stateInitial, action) {

    let newState={...state}
    switch (action.type) {
        case "ChangeStore":
        newState={
            Nombre:action.user[0],
            ID:action.user[1]
        }
        break;
        default:
        break;
    }
    return newState;
  }

