class EditTeams4 < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :type, :string, {null: false}
  end
end
