@boards.each do |board|
  json.set! board.id do 
json.extract! board, :id, :user_id, :title, :description 
end

end 