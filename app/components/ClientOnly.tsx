"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hashMouted, setHashMouted] = useState(false);

  useEffect(() => {
    setHashMouted(true);
  }, []);

  if (!hashMouted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
