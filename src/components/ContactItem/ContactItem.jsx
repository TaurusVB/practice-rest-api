import { EditContactModal } from 'components/EditContactModal/EditContactModal';
import { Component } from 'react';

export class ContactItem extends Component {
  state = {
    isOpenModal: false,
  };

  handleModalOpen = () => this.setState({ isOpenModal: true });

  handleModalClose = () => this.setState({ isOpenModal: false });

  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { isOpenModal } = this.state;
    return (
      <li>
        <p>
          <b>Name:</b> {item.name}
        </p>
        <p>
          <b>Email:</b> {item.email}
        </p>
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
        <button type="button" onClick={this.handleModalOpen}>
          Open modal
        </button>
        {isOpenModal && (
          <EditContactModal
            onClose={this.handleModalClose}
            onUpdate={() => onUpdate({ id: item.id, name: Date.now() })}
          />
        )}
        <hr />
      </li>
    );
  }
}
