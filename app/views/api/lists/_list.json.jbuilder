json.extract! list, :title, :id, :due_date, :board_id, :status 



json.cards list.cards do |card| 

  json.extract! card, :id, :task, :due_date, :list_id, :status 


end 


