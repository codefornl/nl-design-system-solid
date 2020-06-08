import './notification.scss'
import { createState, Show } from 'solid-js';

interface Properties {
    type: 'success' | 'info' | 'warning' | 'error' //'TER INFORMATIE' | 'LET OP' | 'GELUKT' | 'STORING'
    title: string
    description: string
    id?: string
    canClose?: boolean
}

/**
 * @class Notification
 * Listens for click events on the close button for notification to close the notification using javascript
 */
export const Notification = (properties: Properties) => {
    const [state, setState] = createState({ notification: true })

    const handleDismiss = () => {
        setState({ notification: false })
    }

    let typeTitle: string
    switch (properties.type) {
        case 'success': {
            typeTitle = 'Gelukt'
            break;
        }
        case 'info': {
            typeTitle = 'Ter informatie'
            break;
        }
        case 'warning': {
            typeTitle = 'Let op'
            break;
        }
        case 'error': {
            typeTitle = 'Storing'
            break;
        }
    }
    /**
     * Closes the notification
     */
    const close = () => {
        handleDismiss()
    }

    return (
        <Show when={state.notification}>
            <div class={`notification notification--${properties.type}`} id={properties.id}>
                <div class="notification__content">
                    <div class="notification__type">{typeTitle}</div>
                    <h2 class="notification__title">{properties.title}</h2>
                    <span>{properties.description}</span>
                </div>
                <Show when={properties.canClose}>
                    <button class="notification__close-button" onClick={close}>
                        <i class="icon icon-cross"></i>
                        Sluit
                    </button>
                </Show>
            </div>
        </Show>
    )
}
