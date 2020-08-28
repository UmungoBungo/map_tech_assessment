import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import ProfilePicWithDefault from './profilePicWithDefault'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

class ChangeProfilePic extends Component {
  _initFirebase = false;
  constructor(props) {
    super(props);

    this.state = {
      profilePicture: '',
      src: null,
      crop: {
        unit: '%',
        width: 30,
        aspect: 1 / 1,
      },
      croppedImageUrl: null,
      blob: null,
      uploadingImg: false
    };

    this.uploadFile = this.uploadFile.bind(this)
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



  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
      this.setState({ name: e.target.files[0].name })
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const [croppedImageUrl, blob] = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl, blob });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve([this.fileUrl, blob]);
      }, 'image/jpeg');
    });
  }

  dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    let croppedImage = new File([u8arr], filename, { type: mime });
    return croppedImage
  }

  uploadFile = event => {
    this.setState({ uploadingImg: true })
    event.preventDefault()
    var blob = new File([this.state.blob], this.state.name);
    const uploadTask = this.props.firebase.storage.ref(`/profilePic/${this.props.firebase.auth.currentUser.uid}/${blob.name}`).put(blob);

    uploadTask.on("state_changed", console.log, console.error, () => {
      this.props.firebase.storage
        .ref(`profilePic/${this.props.firebase.auth.currentUser.uid}`)
        .child(blob.name)
        .getDownloadURL()
        .then((url) => {
          this.props.firebase.auth.currentUser.updateProfile({
            photoURL: url
          })
            .then(() => this.setState({
              profilePicture: url,
              croppedImageUrl: null,
              blob: null,
              src: null,
              uploadingImg: false
            }))
            .catch((error) => console.log('error', error))
        }).catch((error) => console.log('error updating profile', error))
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;

    return (
      <div className="flex flex-col">
        <span className="flex items-center">
          <div className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100 mr-5">
            <ProfilePicWithDefault pictureURL={this.state.profilePicture} />
          </div >
          <label className="py-2 px-3 border border-gray-300 rounded-md leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out cursor-pointer">
            <span className="text-base leading-normal">Change</span>
            <input
              type='file'
              className="hidden"
              accept="image/png, image/jpeg"
              onChange={this.onSelectFile} />
          </label>
        </span>
        <span className="flex items-center mt-5">
          {src &&
            <div className="w-64 rounded-full">
              <ReactCrop
                src={src}
                crop={crop}
                ruleOfThirds
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
              />
            </div>}
          {croppedImageUrl &&
            <div className="ml-3 flex flex-col items-center">
              <div className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <img alt="Crop" className="shadow rounded-full max-w-full h-auto align-middle border-none" src={croppedImageUrl} />
              </div >
              <div className="mt-1"><button
                className="relative w-full py-2 px-2 text-sm leading-5 font-medium rounded-md cta-button focus:shadow-outline-purple"
                onClick={this.uploadFile}>
                Done!
                </button>
              </div>
            </div>}
          {this.state.uploadingImg &&
            <span className="inset-x-0 mx-auto text-sm text-gray-500 absolute" style={{width: "fit-content"}}>
              --Uploading--
            </span>}
        </span>
      </div >
    );
  }
}

export default withFirebase(ChangeProfilePic);
