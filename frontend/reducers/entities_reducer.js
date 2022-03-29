import { combineReducers } from "redux";

import SongReducer from "./song";
import AlbumReducer from "./album";
import CurrentSongReducer from "./current_song";

export default combineReducers({
  song: SongReducer,
  album: AlbumReducer,
  currentSong: CurrentSongReducer
})