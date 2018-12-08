json.extract! user, :id, :username, :email #as more features are added this will grow.
json.avatarLocale url_for user.avatar if user.avatar.attached?
json.followees user.followee_ids
json.followers user.follower_ids
