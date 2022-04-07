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


// click on green button, adds entire playlist/album to queue as array. 

// might need to change how playing a song works from having a current song to the queue. reluctant to because its a bit tricky

// clicking on song inside playlist/album takes that entire playlist/album into queue, then plays the song that was clicked on. 

// have queue and current queue? that way current song handles the current queue and current queue can be changed without affecting current song functions already in place

//if location is albums, take all album songs and place in queue. on song click play

//first be able to handle playing a song in queue and moving onto song after that


// 1. click on song in album/playlist, queues up the entire thing and plays that specific song
// 2. click on album/playlist play: queues entire thing and plays first song then goes down the list 

