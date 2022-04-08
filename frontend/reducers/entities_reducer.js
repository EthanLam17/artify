import { combineReducers } from "redux";

import SongReducer from "./entities/song";
import AlbumReducer from "./entities/album";
import CurrentSongReducer from "./entities/current_song";
import ArtistReducer from "./entities/artist";
import PlaylistReducer from "./entities/playlist";
import QueueReducer from "./entities/queue";
import PlaylistSongReducer from "./entities/playlist_song";

export default combineReducers({
  song: SongReducer,
  album: AlbumReducer,
  currentSong: CurrentSongReducer,
  artist: ArtistReducer,
  playlist: PlaylistReducer,
  queue: QueueReducer,
  playlistSong: PlaylistSongReducer
})