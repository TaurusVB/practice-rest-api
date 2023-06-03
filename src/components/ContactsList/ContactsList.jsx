import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ items, ...otherProps }) => {
  return (
    <ul>
      {items.map(item => (
        <ContactItem key={item.id} item={item} {...otherProps} />
      ))}
    </ul>
  );
};
