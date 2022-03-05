export const getAllAlbums = () => (
    $.ajax({
        url: '/api/albums',
        method: 'GET'
    })
)

export const getAlbum = id => (
    $.ajax({
        url: `/api/albums/${id}`,
        method: 'GET'
    })
)