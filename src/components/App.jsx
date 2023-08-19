import Phonebook from './Phonebook/Phonebook';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { MutatingDots } from 'react-loader-spinner';

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContactsThunk } from 'redux/conatctsOperations';

import css from './App.module.css';

const App = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchContactsThunk());
	}, [dispatch]);

	return (
		<div className={css.container}>
			<h2>Phonebook</h2>
			<Phonebook />
			<h2>Contacts</h2>
			<Filter />
			{error !== null && (
				<p className="c-error">
				Oops, some error occured. Please, try again later. Error: {error}
				</p>
			)}
			{ isLoading && 
				<MutatingDots
					height="100"
					width="100"
					color="#5800a5"
					secondaryColor="#e08e00"
					radius="12.5"
					ariaLabel="mutating-dots-loading"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
				/> }
			<ContactList />
		</div>
	)
}

export default App
