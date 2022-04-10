import { QUEUE_ALBUM, QUEUE_PLAYLIST } from "../../actions/queue_actions"

const _state = {
  queue: null
}

const QueueReducer = (state=_state, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch(action.type) {
    case QUEUE_ALBUM:
      nextState.queue = action.album
      return nextState
    case QUEUE_PLAYLIST:
      nextState.queue = action.playlist
      return nextState
    default: 
      return state
  }
}

export default QueueReducer
