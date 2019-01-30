
**Half-a-thousand-little-boxes** is a 500px inspired<sup>*</sup> photo sharing website. Users are able to share and view photos. If available on the uploaded image, valuable EXIF meta-data is presented along with the photo. Users may follow and unfollow other users. Ruby on Rails and PostgressSQL to provide the backend and React with Redux for the frontend. Images are uploaded and hosted on Amazon Web Services S3 through Rails newly native Active Storage, which has replaced third party gems such as the now in deprecation paperclip with Rails 5.0. <sup>**</sup>

<sup>*</sup>Can you tell from the terrible punny title?
<br/>
<sup>**</sup>This was a headache. 

Users can sign up with a username, an email address and a password. If no username is provided the username is set by default to the local part of the user's required email address.<sup>***</sup> Passwords are not stored in database. In accordance with best practices passwords are not stored but only a salted hash is stored via BCrypt.<sup>****</sup>
  
<sup>***</sup> *Local part being the official but off-sound term for the pre-@ portion of an email address.
<sup>****</sup> *This would not be done in production as I don't have a PHD in math. 

Users have many frames. Each frame is linked via active storage through the blob to AWS S3.

On the React front end Redux is used to handle state. 
