import { ModeToggle } from "@/components/ui/Button/mode-toggle";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs/tabs";
import { SiEraser } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import Document from "./tabs/Document";
import Canvas from "./tabs/Canvas";
import { ETabList } from "@/types/canvasHeader.type";
import ResizableWorkflowLayout from "./tabs/ResizableWorkflowLayout";

const tabsList = [
  {
    label: "Document",
    value: ETabList.DOCUMENT,
    content: "Make changes to your account here.",
  },
  {
    label: "Both",
    value: ETabList.BOTH,
    content: "Make changes to your account and password here.",
  },
  {
    label: "Canvas",
    value: ETabList.CANVAS,
    content: "Change your password here.",
  },
];

//* HOC is used to render the tab content based on the tab selected
const renderTabItem = (tab: ETabList) => {
  switch (tab) {
    case ETabList.DOCUMENT:
      return <Document />;
    case ETabList.CANVAS:
      return <Canvas />;
    case ETabList.BOTH:
      return <ResizableWorkflowLayout />;
    default:
      return <Document />;
  }
};

const CanvasHeader = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <div className="flex w-full justify-between px-6 py-8 border-b-2 dark:border-neutral-950 border-gray-100">
        <LeadingSection />
        <HeaderActionTabs />
        <TrailingSection />
      </div>
      {renderTabItem(query.get("tab") as ETabList) || ETabList.BOTH}
    </div>
  );
};

const HeaderActionTabs = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const navigate = useNavigate();

  const handleTabChange = (tab: ETabList) => {
    query.set("tab", tab);
    navigate({
      search: query.toString(),
    });
  };

  return (
    <Tabs defaultValue={query.get("tab") || ETabList.BOTH}>
      <TabsList>
        {tabsList.map((tab, idx) => (
          <TabsTrigger
            key={idx}
            value={tab.value}
            className="px-5"
            onClick={() => handleTabChange(tab.value)}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

const LeadingSection = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <SiEraser className="text-2xl" />
        <span className="">Sample VO</span>
      </div>
    </div>
  );
};

const TrailingSection = () => {
  return (
    <div>
      <ModeToggle />
    </div>
  );
};

export default CanvasHeader;
