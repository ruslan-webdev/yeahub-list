import { Outlet } from "react-router-dom";

import { Header } from "@/widgets/header";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;