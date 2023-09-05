import React from 'react';
import {
	MdCheckCircleOutline,
	MdDeleteOutline,
	MdModeEditOutline,
} from 'react-icons/md';

const TodoLists = ({ toDo, markDone, editTask, openModal }) => {
	return (
		<>
			{toDo
				.sort((a, b) => (a.id < b.id ? 1 : -1))
				.map((task, index) => (
					<div
						className='col taskBg'
						key={task.id}
					>
						<div className={task.status ? 'done' : ''}>
							<span className='taskNumber'>{index + 1}</span>
							<span className='taskText'>{task.title}</span>
						</div>
						<div className='iconsWrap'>
							<button onClick={() => markDone(task.id)}>
								<MdCheckCircleOutline />
							</button>
							<button
								disabled={task.status ? true : false}
								onClick={() => editTask(task)}
							>
								<MdModeEditOutline />
							</button>

							<button onClick={() => openModal(task.id)}>
								<MdDeleteOutline />
							</button>
						</div>
					</div>
				))}
		</>
	);
};

export default TodoLists;
