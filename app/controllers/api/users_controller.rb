class Api::UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def index
        @users = User.all
        if @users
            render :index
        else
            render {'No users'}
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
            render :show
        else
            render {"User does not exist"}
        end
    end


    private 
    def user_params
        params.require(:user.permit(:username, :email, :password))
    end



end
