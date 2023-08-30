import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import {
	MdCheckCircleOutline,
	MdDeleteOutline,
	MdModeEditOutline,
} from 'react-icons/md';

function App() {
	const [toDo, setToDo] = useState([
		{ id: 1, title: 'task 1', status: false },
		{ id: 2, title: 'task 2', status: false },
	]);

	const [newTask, setNewTask] = useState('');
	const [toggleBtn, setToggleBtn] = useState(false);
	const [editingTask, setEditingTask] = useState(null);

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
		}
	};

	const deleteTask = (id) => {
		let newTaskList = toDo.filter((task) => task.id !== id);
		setToDo(newTaskList);
	};

	const markDone = (id) => {
		const updatedTasks = toDo.map((task) => {
			if (task.id === id) {
				return { ...task, status: !task.status };
			}
			return task;
		});
		setToDo(updatedTasks);
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
				<div className='row mb-5'>
					<div className='col'>
						<input
							type='text'
							className='form-control form-control-lg'
							value={newTask}
							onChange={(e) => {
								setNewTask(e.target.value);
							}}
						/>
					</div>
					<div className='col-auto'>
						<button
							className='btn btn-lg btn-success'
							onClick={addTask}
						>
							{toggleBtn ? 'Update' : 'Add'}
						</button>
						{toggleBtn && (
							<button
								className='btn btn-lg btn-warning ms-2'
								onClick={cancelUpdate}
							>
								Cancel
							</button>
						)}
					</div>
				</div>
				{toDo.length === 0 ? 'No Task' : ''}
				{toDo.map((task, index) => (
					<div
						className='col taskBg'
						key={task.id}
					>
						<div className={task.status ? 'done' : ''}>
							<span className='taskNumber'>{index + 1}</span>
							<span className='taskText'>{task.title}</span>
						</div>
						<div className='iconsWrap'>
							<span onClick={() => markDone(task.id)}>
								<MdCheckCircleOutline />
							</span>
							{task.status ? (
								<></>
							) : (
								<span onClick={() => editTask(task)}>
									<MdModeEditOutline />
								</span>
							)}
							<span onClick={() => deleteTask(task.id)}>
								<MdDeleteOutline />
							</span>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default App;
