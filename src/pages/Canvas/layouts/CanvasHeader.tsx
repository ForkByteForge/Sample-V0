import { ModeToggle } from "@/components/ui/Button/mode-toggle";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs/tabs";
import { SiEraser } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import Document from "./tabs/Document";
import Canvas from "./tabs/Canvas";

enum ETabList {
  DOCUMENT = "document",
  BOTH = "both",
  CANVAS = "canvas",
}

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

const HeaderActionTabs = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const navigate = useNavigate();

  return (
    <Tabs defaultValue={query.get("tab") || ETabList.BOTH}>
      <TabsList>
        {tabsList.map((tab, idx) => (
          <TabsTrigger
            key={idx}
            value={tab.value}
            className="px-5"
            onClick={() => {
              query.set("tab", tab.value);
              navigate({
                search: query.toString(),
              });
            }}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

//TODO: Come up with better names for these components
const LeftSection = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <SiEraser className="text-2xl" />
        <span className="">Sample VO</span>
      </div>
    </div>
  );
};

const RightSection = () => {
  return (
    <div>
      <ModeToggle />
    </div>
  );
};

const CanvasHeader = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <div className="flex w-full justify-between px-6 py-8">
        <LeftSection />
        <HeaderActionTabs />
        <RightSection />
      </div>
      <RenderTabItem tab={(query.get("tab") as ETabList) || ETabList.BOTH} />
    </div>
  );
};

const RenderTabItem = ({ tab }: { tab: ETabList }) => {
  switch (tab) {
    case ETabList.DOCUMENT:
      return <Document />;
    case ETabList.CANVAS:
      return <Canvas />;
    case ETabList.BOTH:
      return (
        <div className="flex gap-2">
          <Document />
          <Canvas />
        </div>
      );
    default:
      return <Document />;
  }
};

export default CanvasHeader;
