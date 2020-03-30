
const reducer = (state = {}, { type, data }) => {
    switch (type) {
    case "RECEIVED_DATA":
        return {...state,data:data}
    default:
        return state;
    }
}


// const reducer = (state = {}, action) => {
//     switch (action.type) {
//        case 'fetchData':
//           return action.data
//        default:
//           return state;
//      }
//   };
export default reducer;
