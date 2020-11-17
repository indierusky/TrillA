class EditUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string
    remove_index :cards, :board_id 
    remove_column :cards, :board_id

  end
end


