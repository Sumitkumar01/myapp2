import React, { createContext, useContext } from "react";

const ServiceProviders = createContext();

function ServerProvider({ children }) {
  return <ServiceProviders.Provider>{children}</ServiceProviders.Provider>;
}

export default ServerProvider;

export const useServiceProvidersContext = () => {
  return useContext(ServiceProviders);
};
