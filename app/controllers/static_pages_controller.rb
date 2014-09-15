class StaticPagesController < ApplicationController

	def icebreaker
		render 'icebreaker'
	end
	def about
		render 'about'
	end
end
