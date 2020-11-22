class CreateJoinTableUserBoard < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :boards do |t|
      # t.index [:user_id, :board_id]
      # t.index [:board_id, :user_id]
      t.index :user_id
      t.index :board_id
    end
  end
end
