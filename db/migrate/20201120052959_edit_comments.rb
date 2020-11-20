class EditComments < ActiveRecord::Migration[5.2]
  def change

    remove_column :comments, :description
    add_column :comments, :description, :text, null: false
  end
end
