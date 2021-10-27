import { createContext, useContext } from "react";
import { ProductType } from "../types/product";

type ProfileDataType = {
  user: any;
  basket: ProductType[];
  addBasketItem: (item: ProductType) => void;
  removeBasketItem: (id: string) => void;
};

export const profileData: ProfileDataType = {
  user: null,
  basket: [] as ProductType[],
  addBasketItem: (item: ProductType) => {},
  removeBasketItem: (id: string) => {},
};

const profileContext = createContext(profileData);

const ProfileContextProvider = profileContext.Provider;
const ProfileContextConsumer = profileContext.Consumer;

const useProfileContext = () => {
  const all = useContext(profileContext);

  return all;
};

export {
  ProfileContextConsumer,
  ProfileContextProvider,
  useProfileContext,
  profileContext,
};
