json.frame do
  json.partial! 'frame', frame: @frame
end
json.user do
  json.extract! @user, :id, :username, :email
end
