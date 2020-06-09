import './header.scss'

interface Properties {
    children: any
}

/**
 * See: https://nl-design-system.gitlab.io/nl-design-system/componenten/header/index.html
 * 
 * @param properties
 */
export const ContentHeader = (properties: Properties) => (
    <section class="row">
        <div class="col-xs-12 col-sm-11 col-md-10 col-lg-9 col-xl-8">
            <div class="content">
                <header class="content__header">
                    {properties.children}
                </header>
            </div>
        </div>
    </section>
);

