import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import "@/globals.css";
import theme from "@/theme";
import { Locale } from "@/types";
import { dir } from "i18next";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wishlist For Friends",
  description:
    "This application is a tool that allows users to create and manage lists of desired items or services. These applications are popular among shoppers, gift enthusiasts, and people who want to plan their purchases.",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            {children}
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
