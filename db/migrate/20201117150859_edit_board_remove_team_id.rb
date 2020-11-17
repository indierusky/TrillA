class EditBoardRemoveTeamId < ActiveRecord::Migration[5.2]
  def change
    remove_column :boards, :team_id
    add_column :comments, :card_id, :integer
    add_index :comments, :card_id
  end
end
