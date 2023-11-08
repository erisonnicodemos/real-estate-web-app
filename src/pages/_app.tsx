// _app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { PropertyProvider } from "@/contexts/PropertyContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <PropertyProvider>
        <Component {...pageProps} />
      </PropertyProvider>
    </Layout>
  );
}

export default MyApp;
