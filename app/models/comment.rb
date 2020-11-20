class Comment < ApplicationRecord

validates :description, presence:true 


belongs_to :author,
primary_key: :id,
foreign_key: :author_id,
class_name: 'User'

belongs_to :card,
primary_key: :id,
foreign_key: :card_id,
class_name: 'Card'





















end 