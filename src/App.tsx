import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransationModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransationModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransationModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
