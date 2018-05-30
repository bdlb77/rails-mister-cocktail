class CocktailsController < ApplicationController
  before_action :set_cocktail, only: [:show]
  def index
    @cocktails = Cocktail.all
  end

  def create
   Cocktail.create(cocktail_params)
   redirect_to cocktails_path
  end
  
  def new
    @cocktail = Cocktail.new
  end

  def show
    @dose = Dose.new
  end

  private

  def cocktail_params
    params.require(:cocktail).permit(:name)
  end

  def set_cocktail
    @cocktail = Cocktail.find(params[:id])
  end

end
