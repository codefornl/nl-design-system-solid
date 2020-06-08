import './button.scss'

interface Properties {
    title: string
    disabled?: boolean
    primary?: boolean
    onClick: () => void
}

export const Button = (properties: Properties) => {
    const click = () => {
        if (properties.onClick) properties.onClick()
    }

    return (
        <button class={`btn${properties.primary ? " btn--primary" : ""}`}
            disabled={properties.disabled}
            onClick={click}>
            {properties.title}
        </button>
    )
}