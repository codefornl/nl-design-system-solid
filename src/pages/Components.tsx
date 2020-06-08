import { SideNav } from "../components/navigation/sidenav";
import { NavigationItemProperties } from "../components/navigation/navigation-item";

export const Components = () => {
    const items: NavigationItemProperties[] = [
        { href: "../componenten/index.html", title: "Introductie", active: true },
        { href: "backlink/index.html", title: "Backlink" },
        { href: "bottom-bar/index.html", title: "Bottom bar" },
        { href: "button/index.html", title: "Button" },
        { href: "card/index.html", title: "Card" },
        { href: "donutchart/index.html", title: "Chart" },
        { href: "checkbox/index.html", title: "Checkbox" },
        { href: "collapse/index.html", title: "Collapse" },
        { href: "combobox/index.html", title: "Combobox" },
        { href: "definition-list/index.html", title: "Definition list" },
        { href: "footer/index.html", title: "Footer" },
        { href: "file/index.html", title: "File" },
        { href: "filter/index.html", title: "Filter" },
        { href: "form/index.html", title: "Form" },
        { href: "header/index.html", title: "Header" },
        { href: "hint/index.html", title: "Hint" },
        { href: "images/index.html", title: "Images" },
        { href: "label/index.html", title: "Labels & badges" },
        { href: "lists/index.html", title: "Lists" },
        { href: "modal/index.html", title: "Modal" },
        { href: "meta/index.html", title: "Meta" },
        { href: "navigation/index.html", title: "Navigation" },
        { href: "notification/index.html", title: "Notification" },
        { href: "pagination/index.html", title: "Pagination" },
        { href: "quote/index.html", title: "Quote" },
        { href: "radio/index.html", title: "Radiobutton" },
        { href: "sections/index.html", title: "Section" },
        { href: "skiplink/index.html", title: "Skiplink" },
        { href: "spinner/index.html", title: "Spinner" },
        { href: "switch/index.html", title: "Switch" },
        { href: "table/index.html", title: "Table" },
        { href: "tabs/index.html", title: "Tabs" },
        { href: "timeline/index.html", title: "Timeline" },
        { href: "tooltip/index.html", title: "Tooltip" },
        { href: "videos/index.html", title: "Video" }
    ]

    return (
        <div class="row">
            <SideNav items={items} show={true}/>
            <div class="col-xl-9 col-lg-8 col-md-9">
                <div class="content-background">
                    <div class="skiplink-target content" id="main-content">
                        <p>
                            De componenten zijn optionele onderdelen van de <span lang="en-US">library</span>. Probeer alleen
                        de componenten in te laden die ook daadwerkelijk gebruikt worden.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}