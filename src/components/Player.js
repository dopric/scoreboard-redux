import React, {PropTypes} from 'react'
import Counter from './Counter'

const Player = props => {
    return (
      <div className="player">
        <div className="player-name"
        onClick={()=> props.selectPlayer(props.index)}>
          <a className="remove-player" onClick={props.onRemove}>✖</a>
          {props.name}
        </div>
        <div className="player-score">
          <Counter onChange={props.onScoreChange} score={props.score} />
        </div>
      </div>
    );
  }
  
  Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    onScoreChange: PropTypes.func.isRequired,
    selectPlayer: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  };

  export default Player;