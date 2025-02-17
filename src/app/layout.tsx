import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { ConvexClientProvider } from "@/components/convex-client-provider";

import "./globals.css";
import { Modals } from "@/components/modals";
import { Toaster } from "sonner";
import { JotaiProvider } from "@/components/jotai-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body>
          <ConvexClientProvider>
            <JotaiProvider>
              <NuqsAdapter>
                <Toaster />
                <Modals />
                {children}
              </NuqsAdapter>
            </JotaiProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
