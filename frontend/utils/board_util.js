export const fetchBoards = () => (

    $.ajax({ method: 'get', url: `/api/boards` })

)

export const fetchBoard = boardId => (

    $.ajax({ method: 'get', url: `/api/boards/${boardId}` })

)

export const updateBoard = board => (

    $.ajax({ method: 'patch', url: `/api/boards/${boardId}`, data: {board} })

)

export const createBoard = board => (

    $.ajax({ method: 'post', url: `/api/boards`, data: { board } })


)

export const deleteBoard = boardId => (

    $.ajax({ method: 'delete', url: `/api/boards/${boardId}`})

)







