export const QUEUE_ALBUM = 'QUEUE_ALBUM';
export const QUEUE_PLAYLIST = 'QUEUE_PLAYLIST'

export const queueAlbum = album => ({
  type: QUEUE_ALBUM,
  album
})

export const queuePlaylist = playlist => ({
  type: QUEUE_PLAYLIST,
  playlist
})