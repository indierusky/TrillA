export const fetchCards = () => (

    $.ajax({ method: 'get', url: `/api/cards` })

)

export const fetchCard = cardId => (

    $.ajax({ method: 'get', url: `/api/cards/${cardId}` })

)

export const updateCard = card => (

    $.ajax({ method: 'patch', url: `/api/cards/${cardId}`, data: { card } })

)

export const createCard = card => (

    $.ajax({ method: 'post', url: `/api/cards`, data: { card } })


)

export const deleteCard = cardId => (

    $.ajax({ method: 'delete', url: `/api/cards/${cardId}` })

)


//                 api_cards GET    /api/cards(.:format)                                                                     api/cards#index {:format=>:json}
//                           POST   /api/cards(.:format)                                                                     api/cards#create {:format=>:json}
//              new_api_card GET    /api/cards/new(.:format)                                                                 api/cards#new {:format=>:json}
//             edit_api_card GET    /api/cards/:id/edit(.:format)                                                            api/cards#edit {:format=>:json}
//                  api_card GET    /api/cards/:id(.:format)                                                                 api/cards#show {:format=>:json}
//                           PATCH  /api/cards/:id(.:format)                                                                 api/cards#update {:format=>:json}
//                           PUT    /api/cards/:id(.:format)                                                                 api/cards#update {:format=>:json}
//                           DELETE /api/cards/:id(.:format)                                                                 api/cards#destroy {:format=>:json}

