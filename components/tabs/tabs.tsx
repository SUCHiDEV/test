"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Tab {
  id: number;
  name: string;
  url: string;
}
interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FunctionComponent<TabsProps> = ({ tabs }) => {
  const pathname = usePathname();

  return (
    <div className="tabs flex rounded-full border border-[#28374D] text-xs">
      {tabs.map((tab) => (
        <Link
          href={tab.url}
          className={`py-1.5 px-4 rounded-full ${
            pathname === tab.url ? "bg-[#263752]" : ""
          }`}
          key={tab.id}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
