import './card.scss'
import { Show } from 'solid-js'

export interface CardProperties {
    title: string
    image: string
    content?: string
    href?: string
    onclick?: EventHandlerNonNull
}

export const Card = (properties: CardProperties) => (
    <li class="card">
        <a href={`${properties.href ? properties.href : "#"}`} class="card__content" onClick={properties.onclick}>
            <div class="card__thumb" style={`background-image: url('${properties.image}')`}></div>
            <div class="card__body">
                <span class="card__title">{properties.title}</span>
                <Show when={properties.content}>
                    <p>{properties.content}</p>
                </Show>
            </div>
        </a>
    </li>
)