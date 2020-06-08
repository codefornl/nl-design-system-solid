import './backlink.scss'

interface Properties {
    title?: string
    content: string
}

export const Backlink = (properties: Properties) => (
    <>
        <a href="#" class="backlink" title={properties.title ? properties.title : properties.content}>
            {properties.content}
        </a>
    </>
)