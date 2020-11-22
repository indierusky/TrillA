class EditComments2 < ActiveRecord::Migration[5.2]
  def change
    change_column :comments, :author_id, :integer, {null: false}
    change_column :comments, :card_id, :integer, {null: false}

  end
end


