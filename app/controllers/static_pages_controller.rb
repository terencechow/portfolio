class StaticPagesController < ApplicationController

	def icebreaker
		render 'icebreaker'
	end
	def about
		render 'about'
	end
	def rep
		render 'rep'
	end
end
