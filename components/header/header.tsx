"use client";

import Tabs from "../tabs";

const tabs = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Casino", url: "/casino", active: 1 },
];

const Header: React.FunctionComponent<{}> = () => (
  <div className="header w-full h-16 flex justify-center items-center">
    <Tabs tabs={tabs} />
  </div>
);

export default Header;
