import { createState, createContext, useContext, Component } from "solid-js"
import { SlideToggle } from "./core/animations/SlideToggle";

type NavigationStore = [
  { visible: boolean },
  { show?: () => void; hide?: () => void; toggle?: () => void }
];

const NavigationContext = createContext<NavigationStore>([{ visible: false }, {}]);

export const NavigationProvider: Component<{ visible: boolean }> = props => {
  const [state, setState] = createState({ visible: props.visible || false }),
    store: NavigationStore = [
      state,
      {
        show() {
          console.log("Show")
          setState("visible", c => true);
        },
        hide() {
          console.log("Hide")
          setState("visible", c => false);
        },
        toggle() {
          console.log("Toggle")
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

export function useNavigationProvider() {
  return useContext(NavigationContext);
}