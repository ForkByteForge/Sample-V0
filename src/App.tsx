import { useRoutes } from "react-router-dom";
import { TailwindIndicator } from "./components/tailwind-indicator";
import { ModeToggle } from "./components/ui/Button/mode-toggle";

const routes = [{ path: "/", element: <Home /> }];

function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <ModeToggle />
      {/* <h1 className="text-4xl font-bold">Welcome to Remix!</h1>
      <p className="text-lg">
        This is a starter template for a Remix app. You can start building your
        app right away.
      </p> */}
    </section>
  );
}

function App() {
  const children = useRoutes(routes);

  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <div className="flex-1">{children}</div>
      </div>
      <TailwindIndicator />
    </>
  );
}

export default App;
