class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
     t.integer :list_id, null:false
    t.integer :board_id, null:false
    t.date    :due_date, null:false
    t.string :task,    null:false
    t.string :status, null:false
    t.timestamps 
  end
  add_index :cards, :list_id
  add_index :cards, :board_id
  end
end
