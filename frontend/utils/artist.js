export const getArtist = id => (
  $.ajax({
    url: `/api/artists/${id}`,
    method: 'GET'
  })
)

export const getAllArtists = () => (
  $.ajax({
    url: '/api/artists',
    method: 'GET'
  })
)