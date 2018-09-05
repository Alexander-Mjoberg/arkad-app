const tempEvents = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
  { id: '4', name: 'Item 4' },
  { id: '5', name: 'Item 5' }
]

const initialState = tempEvents.map(item => ({
  key: item.id.toString(),
  name: item.name
}))

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default eventReducer