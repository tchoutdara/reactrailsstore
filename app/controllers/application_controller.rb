class ApplicationController < ActionController::API

    private
        def render_error(object)
            render json: {errors: object.errors.full_message }, status: 422
        end
end
