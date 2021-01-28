class Trail < ApplicationRecord
  has_many :completes
  has_many :skiers, through: :completes
end
