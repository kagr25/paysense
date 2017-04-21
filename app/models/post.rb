class Post < ActiveRecord::Base
  enum status: %w(active deleted)
end
