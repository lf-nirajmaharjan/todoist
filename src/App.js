import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/style.css';

function App() {
	const [inputText, setInputText] = useState();
	const [items, setItems] = useState([]);

	const handleChange = (e) => {
		setInputText(e.target.value);
	};

	const handleTaskList = () => {
		setItems((oldItems) => {
			return [...oldItems, inputText];
		});
		setInputText('');
	};

	const handleDelete = (id) => {
		setItems((oldItems) => {
			return oldItems.filter((arrElem, index) => {
				return index !== id;
			});
		});
	};

	const handleEdit = (id) => {
		let newEditItem = items.find((item, index) => {
			return index === id;
		});

		setInputText(newEditItem);
	};

	return (
		<section className='vh-100 gradient-custom'>
			<div className='container py-5 h-100'>
				<div className='row d-flex justify-content-center'>
					<div className='col col-xl-10'>
						<header className='mb-5'>
							<h1 className='text-center fw-bolder text-primary'>MY TODOS</h1>
						</header>
						<div className='card'>
							<div className='card-body p-5'>
								<form className='d-flex justify-content-center align-items-center mb-4'>
									<div className='form-outline flex-fill'>
										<div className='form-floating'>
											<input
												type='text'
												class='form-control'
												id='floatingInput'
												placeholder='New Task'
												onChange={handleChange}
												value={inputText}
											/>
											<label for='floatingInput'>New Task</label>
										</div>
									</div>
									<button
										type='submit'
										className='btn btn-primary ms-2'
										onClick={handleTaskList}
									>
										Add
									</button>
								</form>

								<ul className='list-group mb-0'>
									{items.map((item, index) => {
										return (
											<li
												id={index}
												key={index}
												className='list-group-item d-flex align-items-center border-0 mb-2 rounded'
												style={{ backgroundColor: '#f4f6f7' }}
											>
												<input
													className='form-check-input me-2'
													type='checkbox'
													value=''
													aria-label='...'
												/>
												{item}

												<div className='action-btns'>
													<button
														className='btn btn-link p-0'
														onClick={() => {
															handleEdit(index);
														}}
													>
														<i class='fa fa-edit'></i>
													</button>
													<button
														className='btn btn-link text-danger'
														onClick={() => {
															handleDelete(index);
														}}
													>
														<i class='fa fa-trash'></i>
													</button>
												</div>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default App;
