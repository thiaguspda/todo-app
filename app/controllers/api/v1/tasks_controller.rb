module Api
  module V1
    class TasksController < ApplicationController
    
      skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy] #desabilita a verificação de CSRF para as ações create, update e destroy

      def index
        tasks = Task.all
        render json: tasks
      end

      def create
        task = Task.new(task_params)
        if task.save
          render json: task, status: :created
        else
          render json: task.errors, status: :unprocessable_entity
        end
      end

      def update
        task = Task.find(params[:id])
        if task.update(task_params)
          render json: task
        else
          render json: task.errors, status: :unprocessable_entity
        end
      end

      def destroy
        task = Task.find(params[:id])
        task.destroy
        head :no_content
      end

      private

      def task_params
        params.require(:task).permit(:title, :description, :completed)
      end
    end
  end
end
