import { useState, useCallback} from "react";
import Layout from '../components/layout';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';

const set = new Set();

export default function newArticles() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [email, setEmail] = useState('');
	const [date, setDate] = useState('');
	const onChangeTitle = useCallback((e) => setTitle(e.target.value), []);
	const onChangeDescription = useCallback((e) => setDescription(e.target.value), []);
	const onChangeEmail = useCallback((e) => setEmail(e.target.value), []);
	const onChangeDate = useCallback((e) => setDate(e.target.value), []);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log({
			title,
			description,
			email,
			date,
		})
	}

	return (
		<Layout>
			<form noValidate autoComplete="off" onSubmit={onSubmit}>
				<div>
					<TextField	
						value={title}
						onChange={onChangeTitle}
						placeholder="Add a title"
					/>
				</div>
				<div>
					<TextField
						value={description}
						onChange={onChangeDescription}
						placeholder="Add a description"
						fullWidth
					/>
				</div>
				<div>
					<TextField
						value={email}
						onChange={onChangeEmail}
						placeholder="Add an email"
						fullWidth
					/>
				</div>
				<div>
					<TextField
						id="date"
						type="date"
						value={date}
						onChange={onChangeDate}
					/>
				</div>
				<Button color="primary" onClick={onSubmit}>Save</Button>
			</form>
		</Layout>
	)
}
