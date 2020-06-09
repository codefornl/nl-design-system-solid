import { SideNav } from "../components/navigation/sidenav";
import { NavigationItemProperties } from "../components/navigation/navigation-item";

export const Components = () => {
    const activate = (e: any) => {
        console.log(e.currentTarget.textContent)
    }
    const items: NavigationItemProperties[] = [
        { title: "Introductie", active: true, onclick: activate},
        { title: "Backlink", onclick: activate },
        { title: "Bottom bar", onclick: activate },
        { title: "Button", onclick: activate },
        { title: "Card", onclick: activate },
        { title: "Chart", onclick: activate },
        { title: "Checkbox", onclick: activate },
        { title: "Collapse", onclick: activate },
        { title: "Combobox", onclick: activate },
        { title: "Definition list", onclick: activate },
        { title: "Footer", onclick: activate },
        { title: "File", onclick: activate },
        { title: "Filter", onclick: activate },
        { title: "Form", onclick: activate },
        { title: "Header", onclick: activate },
        { title: "Hint", onclick: activate },
        { title: "Images", onclick: activate },
        { title: "Labels & badges", onclick: activate },
        { title: "Lists", onclick: activate },
        { title: "Modal", onclick: activate },
        { title: "Meta", onclick: activate },
        { title: "Navigation", onclick: activate },
        { title: "Notification", onclick: activate },
        { title: "Pagination", onclick: activate },
        { title: "Quote", onclick: activate },
        { title: "Radiobutton", onclick: activate },
        { title: "Section", onclick: activate },
        { title: "Skiplink", onclick: activate },
        { title: "Spinner", onclick: activate },
        { title: "Switch", onclick: activate },
        { title: "Table", onclick: activate },
        { title: "Tabs", onclick: activate },
        { title: "Timeline", onclick: activate },
        { title: "Tooltip", onclick: activate },
        { title: "Video", onclick: activate  }
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