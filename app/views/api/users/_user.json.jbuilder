debugger
json.extract! user, :id, :username, :email #as more features are added this will grow.
json.followees user.followee_ids
json.followers user.follower_ids
