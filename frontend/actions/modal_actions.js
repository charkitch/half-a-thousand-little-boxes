export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const UPLOAD_FILE_SELECT = "UPLOAD_FILE_SELECT";
export const UPLOAD_FORM = "UPLOAD_FORM";


export const openModal = modal => (
  {
    type: OPEN_MODAL,
    modal
  }
);

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
