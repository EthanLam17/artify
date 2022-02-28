# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Converts camel to snake case
Jbuilder.key_format camelize: :lower
