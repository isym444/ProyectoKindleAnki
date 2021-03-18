const initial_state = {
    count: 0,
    num:0
}

const countreducer = (state = initial_state, action) => {

    switch (action.type) {
        case 'increament': {
            return {
                ...state,
                count: action.payload, //h why don't need state.count
           test:'0'
            }
        }
        case 'decrement': {
            return {
                ...state,
                count: action.payload
            }
        }
        // default:
        //     break;
        default: {
            return state
        }
    }

}

export default countreducer