import { createState, onCleanup } from "solid-js";
import { Badge } from "./label/badge";

export const Counter = () => {
  const [state, setState] = createState({ counter: 0 });

  const interval = setInterval(
    () => setState({ counter: state.counter + 1 }),
    1000
  );

  onCleanup(() => clearInterval(interval));

  return <Badge color={'robijnrood'} value={ state.counter }></Badge>;
};
