import { SHOW_ALERT, HIDE_ALERT } from '../types'

//Mostrar alerta
export function showAlert(alert) {
    return (dispatch) => {
        dispatch(createAlert(alert))
    }
}

const createAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})

//Ocultar la alerta
export function hideAlertAction(alert) {
    return (dispatch) => {
        dispatch(hideAlert(alert))
    }
}

const hideAlert = () => ({
    type: HIDE_ALERT
})