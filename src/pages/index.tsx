import { Home } from "../pages/home";
import { Skeleton } from "../pages/skeleton";
import { VerticalSteps } from "../pages/vertical-steps";

type TComponent = {
  name: string;
  path: string;
  component: () => JSX.Element;
};

const components: Array<TComponent> = [
  {
    name: "Skeleton",
    component: Skeleton,
  },
  {
    name: "Vertical steps",
    component: VerticalSteps,
  },
]
  .map(({ name, component }) => ({
    name: name,
    path: component.name.toLowerCase(),
    component,
  }))
  .sort((a, b) => (a.path > b.path ? 1 : -1));

export default Home;
export { components };
