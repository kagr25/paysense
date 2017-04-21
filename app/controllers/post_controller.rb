class PostController < ApiController

  before_action :verify_token, only: [:delete, :delete_all]

  def index
    render json: Post.all.collect{|post| post.to_hash}, status: :ok
  end

  def create
    ensure_params(:message) and return
    render json: Post.create!(message: params[:message], ip: request.remote_ip).to_hash, status: :ok
  end

  def delete
    ensure_params(:id) and return
    post = Post.find(params[:id])
    post.update_attributes!(status: 'deleted')
    render json: {message: 'Successfully Deleted!!!'}, status: :ok
  end

  def delete_all
    Post.update_all(status: 1)
    render json: {message: 'All Post Deleted Successfully!!!'}, status: :ok
  end

  private
  def verify_token
    ensure_params(:token) and return
    render_api_error(15, 401, 'invalid access' , "You enter the invalid token: #{params[:token]}.") if AccessToken.find_by_token(params[:token]).nil?
  end

end
