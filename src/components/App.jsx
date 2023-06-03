import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactsEditorForm } from './ContactsEditorForm/ContactsEditorForm';
import { ContactsList } from './ContactsList/ContactsList';
import * as API from './services/api';

export class App extends Component {
  state = {
    contacts: [],
    loading: false,
  };

  componentDidMount() {
    this.getContacts();
  }

  // componentDidUpdate(_, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     this.getContacts();
  //   }
  // }

  addContact = async values => {
    try {
      this.setState({ loading: true });
      const contact = await API.addContact(values);
      this.setState(state => ({
        contacts: [...state.contacts, contact],
        loading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  getContacts = async () => {
    try {
      this.setState({ loading: true });
      const contacts = await API.getContacts();
      this.setState({ contacts });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  deleteContact = async id => {
    try {
      await API.deleteContact(id);
      this.setState(state => ({
        contacts: state.contacts.filter(contact => contact.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  updateContact = async fields => {
    try {
      const updatedContact = await API.updateContact(fields);
      this.setState(state => ({
        contacts: state.contacts.map(contact =>
          contact.id === fields.id ? updatedContact : contact
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { loading, contacts } = this.state;
    return (
      <div>
        {loading && (
          <p
            style={{
              fontSize: '100px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%',
            }}
          >
            Loading
          </p>
        )}
        <ContactsEditorForm onSubmit={this.addContact} />
        <ContactsList items={contacts} onDelete={this.deleteContact} onUpdate={this.updateContact}/>
        <GlobalStyle />
      </div>
    );
  }
}
