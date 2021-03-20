export default (state = '0,00 ₽', action) => {
    switch (action.type) {
        case 'oneBatch':
            return state = '700,00 ₽'
        case 'twoBatch':
            return state = '750,00 ₽'
        case 'treeBatch':
            return state = '800,00 ₽'
        default:
            return state = '724,50 ₽'
    }
}
