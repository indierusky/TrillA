class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :description
      t.integer :author_id
    end
    add_index :comments, :author_id
  end
end
