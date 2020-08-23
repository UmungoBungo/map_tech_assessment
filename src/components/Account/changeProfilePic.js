import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import { withFirebase } from '../Firebase';

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
          {this.state.profilePicture ?
            <img src={this.state.profilePicture} />
            :
            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          }
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
