class Novel < ApplicationRecord
    enum status: [:not_started, :in_progress, :complete]
end
