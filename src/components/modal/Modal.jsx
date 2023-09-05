import React from 'react';

const Modal = ({ onAction, closeModal, title, message, buttonLabel }) => {
	return (
		<div className='m-container'>
			<div className='m-content'>
				<div className='m-header'>
					<h2 className='m-title'>{title}</h2>
					<button
						className='m-close-button'
						id='closeModalButton'
						onClick={closeModal}
					>
						&times;
					</button>
				</div>
				<div className='m-body'>
					<p>{message}</p>
				</div>
				<div className='m-footer'>
					<button
						className='me-2 btn btn-outline-secondary'
						onClick={closeModal}
					>
						Cancel
					</button>
					<button
						className='btn btn-danger'
						onClick={onAction}
					>
						{buttonLabel}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
