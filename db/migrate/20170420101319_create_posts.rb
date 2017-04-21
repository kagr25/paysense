class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :message, default: nil
      t.string :ip, default: nil
      t.integer :status, default: 0

      t.timestamps null: false
    end
  end
end
