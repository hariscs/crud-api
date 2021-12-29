let users = [
	{
		name: 'Mike Joy',
		email: 'mike@gmail.com',
		age: 31,
	},
	{
		name: 'Marry Joy',
		email: 'marry@gmail.com',
		age: 30,
	},
];

export const allUsers = (req, res) => {
	res.send(users);
};
