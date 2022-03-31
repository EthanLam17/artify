export const getAllArtists = () => (
  $.ajax({
    url: '/api/artists',
    method: 'GET'
  })
)

export const getArtist = id => (
  $.ajax({
    url: `/api/artists/${id}`,
    method: 'GET'
  })
)