class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
    t.integer :team_id, null:false
    t.string  :title, null:false
    t.string  :description, null:false
    t.date    :due_date, null:false
    t.timestamps 
    end
  end
end
