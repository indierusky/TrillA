class EditBoards3 < ActiveRecord::Migration[5.2]
  def change
    change_column :boards, :user_id, :integer, {null: false}
  end
end
