import './list-card.scss';
import { CardProperties, Card } from '../card/card';
import { For } from 'solid-js';

interface Properties {
    cards: CardProperties[];
}

export const CardList = (properties: Properties) => {
    return (
        <ul class="list list--card">
            <For each={properties.cards} fallback={<li class="Card">No Cards</li>}>
                {card => (
                    <Card title={card.title} image={card.image} content={card.content}/>
                )}
            </For>
        </ul>
    )
};