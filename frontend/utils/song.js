

export const getAllSongs = () => (
    $.ajax({
        url: '/api/songs',
        method: 'GET'
    })
)


export const getSong = id => (
    $.ajax({
        url: `/api/songs/${id}`,
        method: "GET"
    })
)