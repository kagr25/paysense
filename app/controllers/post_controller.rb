class PostController < ApplicationController

  # respond_to :json

  def index
    # binding.pry
    render json: Post.all, status: :ok
  end

  # def get_posts
  #   @posts = Post.all
  #   render json: {posts: @posts}, status: :ok
  # end

  def create
    binding.pry
    # respond_with Post.create(message: params[:message], ip: remote.ip)
    render json: {post: Post.create(message: params[:message], ip: request.remote_ip)}, status: :ok
  end

  def delete
    respond_with Post.destory(params[:id])
    #binding.pry
    #if AccessToken.find_by(token: params[:token])
    # @post = post.find(params[:id])
    # @post.update_attributes status: :deleted
    # render json: {posts: Post.all}, status: :ok
  end

  def delete_all
    binding.pry
  end

end
