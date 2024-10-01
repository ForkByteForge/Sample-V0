import { useNavigate, useRoutes } from "react-router-dom";
import { TailwindIndicator } from "./components/tailwind-indicator";
import { ModeToggle } from "./components/ui/Button/mode-toggle";
import { Button } from "./components/ui/Button/button";
import WorkFlowFile from "./pages/Canvas/WorkflowFile";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  { path: "/canvas/add", element: <WorkFlowFile /> },
];

function Home() {
  const navigate = useNavigate();
  const handleCreateNewFile = () => {
    console.log("Creating a new file");
    navigate("/canvas/add");
  };

  return (
    <section className="container flex items-center gap-6 mt-10">
      <ModeToggle />
      <Button onClick={handleCreateNewFile}>Add a new Untitled File</Button>
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
