
json.list do 

# json.set @list.id do 
    # json.partial! "api/lists/list", list: @list 
json.extract! @list, :title, :id, :due_date, :board_id, :status 


# end 

end 

