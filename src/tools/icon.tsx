import './_icon.scss'

export interface IconProperties {
    icon: "home" | string
    role?: string
}

export const Icon = (properties: IconProperties) => (
    <i class={`icon icon-${properties.icon}`} role={properties.role}></i>
);