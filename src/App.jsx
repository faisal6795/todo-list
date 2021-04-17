import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './TodoList';
import { Wrapper, Navbar, SearchBar, SearchInput, NoListMsg, Heading } from './App.styles';
import logo from './assets/logo.svg';
import Icon from './Icon';

function App() {

	const mainList = useSelector(state => state.mainList);
	const counter = useSelector(state => state.counter);
	const [searchText, setSearchText] = useState('');
	const [listToShow, setListToShow] = useState(mainList);
	const dispatch = useDispatch();
	const noSearchResult = 'No search results found.';
	const noTodoList = 'Click the + icon to add your first To Do List.';

	useEffect(() => {
		setListToShow(mainList);
	}, [mainList]);

	function addNewTask() {
		const temp = {
			id: counter + 1,
			title: '',
			todoList: [{ checked: false, text: '' }]
		};
		dispatch({ type: 'ADD_LIST', value: temp });
		dispatch({ type: 'COUNTER', value: counter + 1 });
	}

	function onInputChange(event) {
		const text = event.target.value;
		setSearchText(text);
		setListToShow(mainList.filter(list => list.todoList.some(item => item.text.includes(text))));
	}

	function clearText() {
		setSearchText('');
		setListToShow(mainList);
	}

	function getListToShow() {
		return listToShow.map(item => <TodoList key={item.id} id={item.id} title={item.title} todoList={item.todoList} />);
	}

	return (
		<Wrapper>
			<Navbar>
				<Heading><img src={logo} alt="logo" height='40px' width='40px' /><span>To Do List</span></Heading>
				{mainList.length > 0 && <SearchBar>
					<Icon name='search' customClass='search-icon' />
					<SearchInput placeholder='Search' onChange={onInputChange} value={searchText} />
					{searchText && <Icon name='clear' customClass='clear-icon hover-effect' clickEvent={clearText} />}
				</SearchBar>}
			</Navbar>
			<div className='todo-container'>
				{searchText && !listToShow.length && <NoListMsg>{noSearchResult}</NoListMsg>}
				{!mainList.length && <NoListMsg>{noTodoList}</NoListMsg>}
				{getListToShow()}
			</div>
			<Icon name='add' customClass='add-icon' clickEvent={addNewTask} />
		</Wrapper>
	);
}

export default App;
