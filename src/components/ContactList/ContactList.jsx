import ContactItem from '../ContactItem/ContactItem';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/conatctsOperations';
import { selectFilteredContact } from 'redux/selectors';
import PropTypes from "prop-types";

import css from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContact = useSelector(selectFilteredContact);
    
    const removeContact = id => {
        dispatch(deleteContactThunk(id));
    }

    return (
        <ul className={css.list_group}>
            {filteredContact.map(contact => (
                <ContactItem 
                    key={contact.id}
                    contact={contact}
                    removeContact={removeContact}
                />
            ))}
        </ul>
    )
}

export default ContactList











ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired
    ),
    // removeContact: PropTypes.func.isRequired,
};
