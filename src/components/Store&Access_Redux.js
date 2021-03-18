import React from 'react'
import { connect } from 'react-redux'
// why not need to import store? --> because passed as prop

function MoreDetail(props) {
    console.log(props.count)
    return (
        <div>
            Extra detailing
            {/* where does dispatch come from? -> react redux */}
            <button onClick={() => { props.dispatch({ type: 'increament', payload: props.count.count + 1 }) }}>update count in redux</button> 
            <button onClick={() => { props.dispatch({ type: 'decrement', payload: props.count.count - 1 }) }}>decrement count in redux</button>
           
            <button onClick={() => props.history.goBack()}>Go back </button>
        </div>
    )
}

const mapStateFromProps = (store) => {
    return {
        redcueruser: store.user.user,
        count: store.count
    }
}

export default connect(mapStateFromProps)(MoreDetail) // makes more sense to call this "mapStateToProps"
