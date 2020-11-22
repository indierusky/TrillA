class EditBoardUser < ActiveRecord::Migration[5.2]
  def change
    change_column :boards_users, :user_id, :integer, {unique: true}
    change_column :boards_users, :board_id, :integer, {unique: true}

  end
end
