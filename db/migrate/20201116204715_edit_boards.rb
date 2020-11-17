class EditBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :user_id, :integer
    add_index :boards, :user_id
    add_index :users, :email
    add_index :users, :username
  end
end
