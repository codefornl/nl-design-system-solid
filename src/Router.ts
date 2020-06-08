import { createSignal, onCleanup } from "solid-js";
import { useNavigationProvider } from "./Providers";

/**
 * A simple router to handle internal href's
 */
export function createRouteHandler() {
    const [navigationState, { show, hide }] = useNavigationProvider();
    const [location, setLocation] = createSignal(
        window.location.hash.slice(1) || "home"
    )

    const locationHandler = () => {
        let location = window.location.hash.slice(1);
        if (location === "") {
            location = "home";
        }
        setLocation(location)
        navigationState.visible = true
    }

    window.addEventListener("hashchange", locationHandler);

    onCleanup(() => window.removeEventListener("hashchange", locationHandler));

    return (match: string) => match === location();
}