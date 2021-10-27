import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "../src/client/theme";
import { MainLayout } from "../src/client/components/layout/main-layout";
import createEmotionCache from "../src/client/create-emotion-cache";
import { ProfileContextProvider } from "../src/client/contexts/profile-context";
import { useState } from "react";
import { ProductType } from "../src/types/product";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [{ user, basket }, setProfileContextState] = useState<{
    user: any;
    basket: ProductType[];
  }>({
    user: null,
    basket: [],
  });

  return (
    <CacheProvider value={emotionCache}>
      <ProfileContextProvider
        value={{
          user,
          basket,
          addBasketItem: (item) =>
            setProfileContextState((state) => ({
              ...state,
              basket: state.basket.concat(item),
            })),
          removeBasketItem: (itemId) =>
            setProfileContextState((state) => ({
              ...state,
              basket: state.basket.filter(({ id }) => id !== itemId),
            })),
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Component {...pageProps} />;
          </MainLayout>
        </ThemeProvider>
      </ProfileContextProvider>
    </CacheProvider>
  );
}
export default MyApp;
