export default async (timbangs, action) => {
    switch (action.type) {
      case 'ADD_NEW_TIMBANG':
        return [...timbangs, action.payload]
      case 'FETCH_TIMBANGS':
        return await action.payload
      case 'GET_DATA_BY_ID':
        return action.payload
      case 'TOGGLE_TIMBANGS':
        // window.navigator.('/app/')
        return timbangs.map(item =>
          item.id === action.id ? {
            ...item,
            isDone: !item.isDone,
          } :
          item
        )
      default:
        return timbangs
    }
  }