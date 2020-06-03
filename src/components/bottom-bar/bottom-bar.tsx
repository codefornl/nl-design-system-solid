import './bottom-bar.scss';

interface Properties {
    children: any;
}

export const BottomBar = (properties: Properties) => (
    <>
        <div class="bottom-bar">
            { properties.children }
        </div>
    </>
);