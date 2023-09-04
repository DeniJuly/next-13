import React, { FunctionComponent } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Dashboard",
  description: "Generated by Dashboard",
};
const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <div>hallo</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
