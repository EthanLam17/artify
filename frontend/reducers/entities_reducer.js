import { combineReducers } from "redux";

import SongReducer from "./entities/song";
import AlbumReducer from "./entities/album";
import CurrentSongReducer from "./entities/current_song";
import ArtistReducer from "./entities/artist";
import PlaylistReducer from "./entities/playlist";

export default combineReducers({
  song: SongReducer,
  album: AlbumReducer,
  currentSong: CurrentSongReducer,
  artist: ArtistReducer,
  playlist: PlaylistReducer
})