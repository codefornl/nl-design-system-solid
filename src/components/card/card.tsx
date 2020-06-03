import './card.scss';

interface Properties {
    title: string;
    image: string;
}

export const Card = (properties: Properties) => (
    <>
        <li class="card">
            <a href="#" class="card__content">
                <div class="card__thumb" style={`background-image: url('${properties.image}')`}></div>
                <div class="card__body">
                    <span class="card__title">{properties.title}</span>
                </div>
            </a>
        </li>
    </>
);