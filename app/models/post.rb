class Post < ActiveRecord::Base
  default_scope { where(status: 'active') }
  enum status: %w(active deleted)

  def to_hash
    return {
      id: self.id,
      message: self.message,
      ip: self.ip,
      created_at: self.created_at.strftime('%d-%b-%y'),
      status: self.status
    }
  end
end
