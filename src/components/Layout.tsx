import React, { ReactNode } from "react";
import Nav from "./Nav";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="w-full h-full bg-[#f8fafd]">
      <Nav />
      {children}
    </main>
  );
};

export default Layout;
