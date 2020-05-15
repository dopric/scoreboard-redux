import * as PlayerActionTypes from '../actiontypes/player'
import { updatePlayerScore } from '../actions/player'

const initialState = {
	players: [
		{
			name: 'Jim Hoskins',
			score: 31,
			created: '11/8/2019',
			update: '12/8/2019'
		},
		{
			name: 'Andrew Chalkley',
			score: 20,
			created: '1/3/2020',
			updated: '1/3/2020'
		},
		{
			name: 'Alena Holligan',
			score: 50,
			created: '10/4/2020',
			updated: '15/5/2020'
		}
	],
	selectedPlayerIndex: -1
}

export default function Player(state = initialState, action) {
	let date = new Date()
	let day = date.getDate()
	let month = date.getMonth() + 1
	let year = date.getYear()

	switch (action.type) {
		case PlayerActionTypes.ADD_PLAYER:
			const addPlayer = [
				...state.players,
				{
					name: action.name,
					score: 0,
					created: `${month}/${day}/${year}`,
					updated: `${month}/${day}/${year}`
				}
			]
			return {
				...state,
				players: addPlayer
			}

		case PlayerActionTypes.REMOVE_PLAYER:
			const removePlayerList = [
				...state.players.slice(0, action.index),
				...state.players.slice(action.index + 1)
			]
			return {
				...state,
				players: removePlayerList
			}
		// return[
		//     ...state.slice(0, action.index),
		//     ...state.slice(action.index + 1)
		// ]

		case PlayerActionTypes.UPDATE_PLAYER_SCORE:
			const updatePlayer = state.players.map((player, index) => {
				if (index === action.index) {
					return {
						...player,
						score: player.score + action.score,
						updated: `${day}/${month}/${year}`
					}
				} else {
					return player
				}
			})
			return {
				...state,
				players: updatePlayer
			}

		case PlayerActionTypes.SELECT_PLAYER:
			return {
				...state,
				selectedPlayerIndex: action.index
			}

		default:
			return state
	}
}
