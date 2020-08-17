export default async (balitas, action) => {
  switch (action.type) {
    case 'ADD_NEW_BALITA':
      return [...balitas, action.payload]
    case 'FETCH_BALITAS':
      return await action.payload
    case 'GET_DATA_BY_ID':
      return action.payload
    case 'TOGGLE_BALITA':
      // window.navigator.('/app/')
      return balitas.map(item =>
        item.id === action.id ? {
          ...item,
          isDone: !item.isDone,
        } :
        item
      )
    default:
      return balitas
  }
}