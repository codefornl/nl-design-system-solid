import './notification.scss'

interface Properties {
    type: 'success' | 'info' | 'warning' | 'error' //'TER INFORMATIE' | 'LET OP' | 'GELUKT' | 'STORING';
    title: string;
    description: string;
    id?: string;
}

/**
 * @class Notification
 * Listens for click events on the close button for notification to close the notification using javascript
 */
export const Notification = (properties: Properties) => {
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
        console.log("click");
    }

    return (
        <div class={`notification notification--${properties.type}`} id={properties.id}>
            <div class="notification__content">
                <div class="notification__type">{typeTitle}</div>
                    <h2 class="notification__title">{properties.title}</h2>
                    <span>{properties.description}</span>
            </div>
            <button class="notification__close-button" onclick={close}>
                <i class="icon icon-cross"></i>
                Sluit
            </button>
        </div>
    );
};






