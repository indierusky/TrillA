class EditLists < ActiveRecord::Migration[5.2]
  def change
    remove_column :lists, :status
    remove_column :lists, :due_date
    remove_column :cards, :due_date 
    remove_column :cards, :status
     add_column :lists, :status, :string
     add_column :lists, :due_date, :date
     add_column :cards, :due_date, :date
     add_column :cards, :status, :string


  end
end
