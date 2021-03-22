import { Home } from "../pages/home";
import { Skeleton } from "../pages/skeleton";
import { VerticalSteps } from "../pages/vertical-steps";

type TComponent = {
  path: string;
  component: () => JSX.Element;
};

const components: Array<TComponent> = [Skeleton, VerticalSteps]
  .map((o) => ({
    path: o.name.toLowerCase(),
    component: o,
  }))
  .sort((a, b) => (a.path > b.path ? 1 : -1));

export default Home;
export { components };
