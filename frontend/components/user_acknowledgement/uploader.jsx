// const reader = new FileReader();
// const file = e.currentTarget.files[0]
// reader.onloadened = () =>
//   this.setState({imageUrl: reader.result, imageFile: file});
//
// if (file) {
//   reader.readAsDataURL(file);
// } else {
//   this.set.State({imageUrl: "", imageFile: null});
// }
//
//
//
// handleSubmit(e) {
//   e.preventDefault();
//   const formData = new FormData();
//   formData.append('frame[title]', this.state.title)
//   formData.append('frame[caption]', this.state.caption)
//   if (this.state.photoFile) {
//     formData.append('frame[image]', this.state.photoFile)
//   }
// };
const uploader = () => (
  <input type="file"/>
);

export default uploader;
