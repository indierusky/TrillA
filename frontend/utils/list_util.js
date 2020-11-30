 
export const fetchLists = boardId => (

    $.ajax({method: 'get', url: `/api/boards/${boardId}/lists`})
)


export const fetchList = listId => (

    $.ajax({ method: 'get', url: `/api/lists/${listId}` })
)

export const deleteList = listId => (

    $.ajax({ method: 'delete', url: `/api/lists/${listId}` })
)


export const updateList = list => (

    $.ajax({ method: 'patch', url: `/api/lists/${list.id}`, data: {list} })
)

export const createList = (boardId, list) => (

    $.ajax({ method: 'post', url: `/api/boards/${boardId}/lists`, data: {list} })
)


        //   api_board_lists GET    /api/boards/:board_id/lists(.:format)                                                    api/lists#index {:format=>:json}
        //                   POST   /api/boards/:board_id/lists(.:format)                                            api/lists#create {:format=>:json}



            
            
            