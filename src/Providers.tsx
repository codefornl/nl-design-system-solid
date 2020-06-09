import { createState, createContext, useContext, Component } from "solid-js"
import { createRouteHandler } from "./Router";

const matches = createRouteHandler()

/**
 * Type definition for NavigationStore Object
 */
type NavigationStore = [
  { visible: boolean },
  { show?: () => void; hide?: () => void; toggle?: () => void }
];

/**
 * NavigationContext. Since we want to hide the navigation on the Home page, the
 * App needs to be wrapped in this one
 */
const NavigationContext = createContext<NavigationStore>([{ visible: !matches("home") }, {}]);

/**
 * Provider to Handle the navigation state, show, hide and toggle
 * 
 * @param props 
 */
export const NavigationProvider: Component<{ visible: boolean }> = props => {
  const [state, setState] = createState({ visible: props.visible || !matches("home") }),
    store: NavigationStore = [
      state,
      {
        show() {
          setState("visible", c => true);
        },
        hide() {
          setState("visible", c => false);
        },
        toggle() {
          setState("visible", c => !c);
        }
      }
    ];

  return (
    <NavigationContext.Provider value={store}>
      {props.children}
    </NavigationContext.Provider>
  );
};

/**
 * Implementation of the navigation context
 */
export function useNavigationProvider() {
  return useContext(NavigationContext);
}