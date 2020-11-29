
json.team do

    json.partial! 'api/teams/team', team: @team
end 

json.users do  

    @teams.users.each do |user|
        json.set! user.id do 

         json.partial! 'api/users/user', user: user
    end 

end 


json.boards do 
    json.boards.each do |board|
        json.set! board.id do 

         json.partial! 'api/boards/board', board: board

    end 
end

end 


