import React from 'react';

const TodoAdd = ({ newTask, setNewTask, addTask, cancelUpdate, toggleBtn }) => {
	return (
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
	);
};

export default TodoAdd;
