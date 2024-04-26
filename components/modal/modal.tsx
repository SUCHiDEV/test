interface ModalProps {
  onClose: () => void;
}

const Modal: React.FunctionComponent<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal bg-white text-black rounded-xl fixed p-16 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <h2>Please login first</h2>

      <div className="absolute right-4 top-2 cursor-pointer" onClick={onClose}>
        X
      </div>
    </div>
  );
};

export default Modal;
