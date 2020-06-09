import { createSignal, onCleanup } from "solid-js";

/**
 * A simple router to handle internal href's
 */
export function createRouteHandler() {
    const [location, setLocation] = createSignal(
        window.location.hash.slice(1) || "home"
    )

    const locationHandler = () => {
        let location = window.location.hash.slice(1);
        if (location === "") {
            location = "home";
        }
        setLocation(location)
    }

    window.addEventListener("hashchange", locationHandler);

    onCleanup(() => window.removeEventListener("hashchange", locationHandler));

    return (match: string) => match === location();
}