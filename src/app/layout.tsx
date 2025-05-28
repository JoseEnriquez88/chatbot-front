import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Promtior Chatbot",
  description: "Un asistente inteligente que responde preguntas sobre Promtior",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased gradient-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
