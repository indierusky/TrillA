class Team < ApplicationRecord

validates :title,  presence: true
validates :board_id, :presence => true 
validates :group_id, :presence => true	
   #avoid in memory duplicates. Also added unique index to db
validates :user_id, :uniqueness => {:scope => [:user_id, :board_id]}	


end

belongs_to :board 
belongs_to :user 






end 