class Api::SessionsController < ApplicationController

    def new 
        render :new
    end

    def create 
        @user = User.find_by_credentials(params[:user][:username])
        if @user
            login!(@user)
        else
            flash.now[:errors] = ['Invalid username/email or password']
            render :new
        end
    end

    def destroy
        logout!
        redirect_to new_session_url
    end

end
