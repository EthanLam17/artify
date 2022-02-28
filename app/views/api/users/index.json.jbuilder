@users.each do |user|
    json.extract! user, :id, :username, :email
end