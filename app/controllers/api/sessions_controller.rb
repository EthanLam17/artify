class Api::SessionsController < ApplicationController


    def new 
        render :new
    end

    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ['Incorrect email or password'], status: 401
        end
    end

    def destroy
        if logged_in? 
            logout!
        else
            render json: ["Nobody signed in"], status: 404
        end
    end

end
