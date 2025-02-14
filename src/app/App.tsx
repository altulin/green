import { FC } from "react";
import { HelmetProviderFC } from "./providers/helmet";
import { StoreProvider } from "./providers/store";
import { RoutesProviderFC } from "./providers/routes";
import "normalize.css";
import "./styles/style.scss";
import { ModalManager } from "@/widgets/modal";

const App: FC = () => {
  return (
    <HelmetProviderFC>
      <StoreProvider>
        <RoutesProviderFC />
        <ModalManager />
      </StoreProvider>
    </HelmetProviderFC>
  );
};

export default App;
