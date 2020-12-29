

json.extract! board, :id, :user_id, :title, :description 



json.lists board.lists do |list| 

json.extract! list, :title, :id, :due_date, :board_id, :status 


end 



json.cards board.cards do |card| 

  json.extract! card, :id, :task, :due_date, :list_id, :status 


end 
