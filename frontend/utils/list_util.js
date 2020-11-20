 
export const fetchLists = () => (

    $.ajax({method: 'get', url: '/api/lists'})
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

export const createList = list => (

    $.ajax({ method: 'post', url: `/api/lists`, data: {list} })
)






            
            
            
            
            //     api_lists GET    /api/lists(.:format)                                                                     api/lists#index {:format=>:json}
            //               POST   /api/lists(.:format)                                                                     api/lists#create {:format=>:json}
            //  new_api_list GET    /api/lists/new(.:format)                                                                 api/lists#new {:format=>:json}
            // edit_api_list GET    /api/lists/:id/edit(.:format)                                                            api/lists#edit {:format=>:json}
            //      api_list GET    /api/lists/:id(.:format)                                                                 api/lists#show {:format=>:json}
            //               PATCH  /api/lists/:id(.:format)                                                                 api/lists#update {:format=>:json}
            //               PUT    /api/lists/:id(.:format)                                                                 api/lists#update {:format=>:json}
            //               DELETE /api/lists/:id(.:format)                                                                 api/lists#destroy {:format=>:json}