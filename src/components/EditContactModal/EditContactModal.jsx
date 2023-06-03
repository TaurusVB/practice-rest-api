export const EditContactModal = ({ onClose, onUpdate }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          onUpdate();
          onClose();
        }}
      >
        Update contact
      </button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};
