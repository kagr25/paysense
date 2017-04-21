class CreateAccessTokens < ActiveRecord::Migration
  def change
    create_table :access_tokens do |t|
      t.string :token
      t.string :ip, default: nil
      t.timestamps :expiry
      t.timestamps null: false
    end
  end
end
