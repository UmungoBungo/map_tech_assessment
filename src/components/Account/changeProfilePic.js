import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import { withFirebase } from '../Firebase';
import ProfilePicWithDefault from './profilePicWithDefault'

class ChangeProfilePic extends Component {
  _initFirebase = false;
  constructor(props) {
    super(props);

    this.state = {
      profilePicture: ''
    };
  }

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.props.firebase.onAuthUserListener(
        authUser => {
          this.setState({ profilePicture: authUser.picture })
        }
      )
    }
  }

  componentDidMount() {
    this.firebaseInit()
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  uploadFile = (pictureFiles) => {
    const file = pictureFiles[0]
    const uploadTask = this.props.firebase.storage.ref(`/profilePic/${this.props.firebase.auth.currentUser.uid}/${file.name}`).put(file);

    uploadTask.on("state_changed", console.log, console.error, () => {
      this.props.firebase.storage
        .ref(`profilePic/${this.props.firebase.auth.currentUser.uid}`)
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          this.props.firebase.auth.currentUser.updateProfile({
            photoURL: url
          })
            .then(() => this.setState({ profilePicture: url }))
            .catch((error) => console.log('error', error))
        }).catch((error) => console.log('error updating profile', error))
    });
  }

  render() {

    return (
      <div className="flex items-center">
        <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
          <ProfilePicWithDefault pictureURL={this.state.profilePicture} />
        </span>
        <span className="ml-5 rounded-md shadow-sm">
          <ImageUploader
            withIcon={false}
            buttonText="Choose images"
            onChange={this.uploadFile}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
        </span>
      </div>
    );
  }
}

export default withFirebase(ChangeProfilePic);
