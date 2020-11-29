class EditTeams2 < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :title, :string
  end
end
