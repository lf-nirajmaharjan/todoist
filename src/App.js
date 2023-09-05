import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';

import TodoAdd from './components/add-form';
import TodoLists from './components/todo-lists';
import Modal from './components/modal';
import Empty from './components/empty';

function App() {
	const [toDo, setToDo] = useState([]);

	const [newTask, setNewTask] = useState('');
	const [toggleBtn, setToggleBtn] = useState(false);
	const [editingTask, setEditingTask] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [taskToDelete, setTaskToDelete] = useState(null);

	// useEffect(() => {
	// 	const localData = localStorage.getItem('toDo');
	// 	setToDo(JSON.parse(localData));
	// }, []);

	const addTask = () => {
		if (newTask) {
			if (toggleBtn) {
				const updatedTasks = toDo.map((task) => {
					if (task.id === editingTask.id) {
						return { ...task, title: newTask };
					}
					return task;
				});
				setToDo(updatedTasks);
				setToggleBtn(false);
				setEditingTask(null);
			} else {
				let num = toDo.length + 1;
				let newEntry = { id: num, title: newTask, status: false };
				setToDo([...toDo, newEntry]);
			}
			setNewTask('');

			// localStorage.setItem('toDo', JSON.stringify(toDo));
		}
	};

	const openModal = (taskId) => {
		setTaskToDelete(taskId);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const deleteTask = (id) => {
		let newTaskList = toDo.filter((task) => task.id !== id);
		setToDo(newTaskList);
		closeModal();
	};

	const markDone = (id) => {
		const updatedTasks = toDo.map((task) => {
			if (task.id === id) {
				return { ...task, status: !task.status };
			}
			return task;
		});
		setToDo(updatedTasks);
		closeModal();
	};

	const editTask = (task) => {
		setNewTask(task.title);
		setToggleBtn(true);
		setEditingTask(task);
	};

	const cancelUpdate = () => {
		setNewTask('');
		setToggleBtn(false);
		setEditingTask(null);
	};

	return (
		<>
			<div className='container App'>
				<h2 className='my-5'>To Do List App (ReactJS)</h2>
				<TodoAdd
					newTask={newTask}
					setNewTask={setNewTask}
					addTask={addTask}
					cancelUpdate={cancelUpdate}
					toggleBtn={toggleBtn}
				/>

				{toDo.length === 0 && <Empty content='No List Found' />}

				<TodoLists
					toDo={toDo}
					markDone={markDone}
					editTask={editTask}
					openModal={openModal}
				/>

				{showModal && (
					<Modal
						closeModal={closeModal}
						buttonLabel='delete'
						title='Confirm Delete'
						message='Are you sure you want to delete this item?'
						onAction={() => {
							deleteTask(taskToDelete);
						}}
					/>
				)}
			</div>
		</>
	);
}

export default App;
