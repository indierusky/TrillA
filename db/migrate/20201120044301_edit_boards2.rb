class EditBoards2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :boards, :due_date
    remove_column :boards, :description 
    add_column :boards, :due_date, :date
    add_column :boards, :description, :text
  end
end
