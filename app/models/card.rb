class Card < ApplicationRecord

validates :task, presence:true

has_many :comments,
primary_key: :id,
foreign_key: :card_id,
class_name: 'Comment'

belongs_to :list,
primary_key: :id,
foreign_key: :list_id,
class_name: 'List'












end 