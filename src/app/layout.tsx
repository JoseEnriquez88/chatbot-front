import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Promtior Chatbot",
  description:
    "Un asistente inteligente que responde preguntas sobre Promtior.",
  keywords: [
    "chatbot",
    "IA",
    "Promtior",
    "asistente virtual",
    "RAG",
    "virtual assistant",
    "inteligencia artificial",
    "preguntas frecuentes",
    "FAQ",
    "preguntas y respuestas",
    "respuestas automáticas",
    "asistente inteligente",
    "asistente de IA",
    "asistente de inteligencia artificial",
    "asistente de preguntas frecuentes",
    "asistente de FAQ",
    "asistente de preguntas y respuestas",
    "asistente de respuestas automáticas",
    "asistente de respuestas",
    "asistente de chat",
    "asistente de conversación",
    "asistente de soporte",
    "asistente de atención al cliente",
    "asistente de servicio al cliente",
    "asistente de ayuda",
    "asistente de información",
    "asistente de conocimiento",
  ],
  authors: [
    {
      name: "Jose Carlos Enriquez Dominguez",
      url: "https://enriquez-jose.vercel.app/",
    },
  ],
  openGraph: {
    title: "Promtior Chatbot",
    description:
      "Un asistente inteligente que responde preguntas sobre Promtior.",
    url: "https://chatbot-front-three.vercel.app/",
    siteName: "Promtior Chatbot",
    images: [
      {
        url: "/src/assets/logo.webp",
        width: 1200,
        height: 630,
        alt: "Promtior",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promtior Chatbot",
    description:
      "Un asistente inteligente que responde preguntas sobre Promtior.",
    images: ["/src/assets/logo.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
