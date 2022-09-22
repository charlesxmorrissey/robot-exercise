const ADD_ROBOT = 'ADD_ROBOT'
const DELETE_ROBOT = 'DELETE_ROBOT'

export const robotsReducer = (state, action) => {
  switch (action.type) {
    case ADD_ROBOT:
      return [
        ...state,
        {
          Icon: action.payload.Icon,
          attack: action.payload.attack,
          defense: action.payload.defense,
          id: action.payload.id,
          name: action.payload.name,
        },
      ]

    case DELETE_ROBOT:
      return [...state.filter((robot) => robot.id !== action.payload.id)]

    default:
      return state
  }
}

export const addAction = ({ Icon, attack, defense, id, name }) => ({
  type: ADD_ROBOT,
  payload: {
    Icon,
    attack,
    defense,
    id,
    name,
  },
})

export const deleteAction = ({ id }) => ({
  type: DELETE_ROBOT,
  payload: {
    id,
  },
})
