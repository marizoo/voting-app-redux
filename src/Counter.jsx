import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './redux/ducks/counter'

const counterStyle = {
    marginTop: "20px",
    display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const buttonWrapper = {
    display: 'flex',
    justifyContent: 'center',
  alignItems: 'center'
}

const Counter = (props) => {
    const {name} = props;
    const dispatch = useDispatch()

    const [votes, setVotes] = useState(0)

    const addHandle = () => {
        dispatch(increment())
        setVotes(votes + 1)
    }

    const reduceHandle = () => {
       dispatch(decrement())
       setVotes(votes - 1)
    }

    return (
        <div style={counterStyle}>
            <h2>{name}</h2>
            <h3>{`Votes: ${votes}`}</h3>
            <div style={buttonWrapper}>
                <button onClick={addHandle}>add</button>
                <button onClick={reduceHandle}>decrease</button>
            </div>
        </div>
    )
}

export default Counter
