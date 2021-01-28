class Skier < ApplicationRecord
  has_many :completes
  has_many :trails, through: :completes
end
