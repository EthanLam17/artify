class Api::UsersController < ApplicationController


    def index
        @users = User.all
        if @users
            render :index
        else
            render {'No users'}
        end
    end


end
