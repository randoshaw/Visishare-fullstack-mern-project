import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
	const USERS = [
		{
			id: 'u1',
			name: 'Rando',
			image:
				'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?cs=srgb&dl=photo-of-stream-during-daytime-3225517.jpg&fm=jpg',
			places: 3
		}
	]

	return <UsersList items={USERS} />
}

export default Users
