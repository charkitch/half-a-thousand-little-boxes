json.extract! user, :id, :username, :email
json.avatarLocale url_for user.avatar if user.avatar.attached?
json.followees user.followee_ids
json.followers user.follower_ids
