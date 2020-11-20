class Board < ApplicationRecord

validates :title, presence:true 


belongs_to :user,
primary_key: :id,
foreign_key: :user_id,
class_name: 'User'

has_many :lists,
primary_key: :id,
foreign_key: :board_id,
class_name: 'List'


has_many :cards, through: :lists

has_many :comments, 
through: :lists,
source: :cards 























end 