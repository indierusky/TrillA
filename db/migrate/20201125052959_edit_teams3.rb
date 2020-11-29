class EditTeams3 < ActiveRecord::Migration[5.2]
  def change
    change_column :teams, :title, :string, {null: false}
  end
end
