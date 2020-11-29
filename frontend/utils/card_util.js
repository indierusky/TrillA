export const fetchCards = listId => (

    $.ajax({ method: 'get', url: `/api/lists/${listId}/cards` })

)

export const fetchCard = cardId => (

    $.ajax({ method: 'get', url: `/api/cards/${cardId}` })

)

export const updateCard = card => (

    $.ajax({ method: 'patch', url: `/api/lists/${cardId}`, data: { card } })

)

export const createCard = (listId, card )=> (

    $.ajax({ method: 'post', url: `/api/lists/${listId}/cards`, data: { card } })


)

export const deleteCard = cardId => (

    $.ajax({ method: 'delete', url: `/api/cards/${cardId}` })

 )

//            api_list_cards GET    /api/lists/:list_id/cards(.:format)                                                      api/cards#index {:format=>:json}
//                           POST   /api/lists/:list_id/cards(.:format)                                                      api/cards#create {:format=>:json}
//         new_api_list_card GET    /api/lists/:list_id/cards/new(.:format)                                                  api/cards#new {:format=>:json}
//        edit_api_list_card GET    /api/lists/:list_id/cards/:id/edit(.:format)                                             api/cards#edit {:format=>:json}
//             api_list_card GET    /api/lists/:list_id/cards/:id(.:format)                                                  api/cards#show {:format=>:json}
//                           PATCH  /api/lists/:list_id/cards/:id(.:format)                                                  api/cards#update {:format=>:json}
//                           PUT    /api/lists/:list_id/cards/:id(.:format)                                                  api/cards#update {:format=>:json}
                        //   DELETE /api/lists/:list_id/cards/:id(.:format)                                                  api/cards#destroy {:format=>:json}
