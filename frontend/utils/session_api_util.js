export const postUser = user => (



    $.ajax({ method: 'post', url:'/api/users', data: {user} })


)

export const postSession = user => (

    $.ajax({ method: 'post', url: '/api/session', data: { user } })


)

export const deleteSession = () => (

    $.ajax({ method: 'delete', url: '/api/session'})

)



export const demoUser = {
   
    email: "andrewrobinson",
    password: "football"
};

export const demoLogin = () => (
    postSession(demoUser)

);