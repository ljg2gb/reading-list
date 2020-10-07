class CreateReaders < ActiveRecord::Migration[6.0]
  def change
    create_table :readers do |t|
      t.string :firstName
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
