import { v4 as uuidv4 } from 'uuid';

let users = [
	{
		name: 'Mike Joy',
		email: 'mike@gmail.com',
		age: 31,
		id: '11',
	},
	{
		name: 'Marry Joy',
		email: 'marry@gmail.com',
		age: 30,
		id: '22',
	},
];

export const allUsers = (req, res) => {
	res.send(users);
};

export const addNewUser = (req, res) => {
	const user = req.body;
	users.push({ ...user, id: uuidv4() });
	res.send('user ' + req.body.name + ' added.');
};

export const user = (req, res) => {
	const { id } = req.params;
	const foundUser = users.find((user) => user.id === id);
	res.send(foundUser);
};

export const deleteUser = (req, res) => {
	const { id } = req.params;

	const userDeleted = users.filter((user) => user.id !== id);
	res.send(userDeleted);
};
