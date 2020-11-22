class ChangeBoardsUsersToTeams < ActiveRecord::Migration[5.2]
  def change
    rename_table :boards_users, :teams 
  end
end
