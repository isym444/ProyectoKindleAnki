const initial_state = {
    user: {
        name: 'abeer',
        roll: '12'
    },
    AUTH:true

}



const userreducer = (state = initial_state, action) => {

    switch (action.type) {
        // case value:

        //     break;

        // default:
        //     break;
        default: {
            return state
        }
    }

}

export default userreducer