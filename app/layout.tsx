import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jain Neuromax Hospital | Advanced Specialist Healthcare",
    template: "%s | Jain Neuromax Hospital",
  },
  description:
    "Jain Neuromax Hospital provides specialist medical care with experienced doctors, modern healthcare infrastructure and a patient-focused experience.",
  keywords: [
    "Jain Neuromax Hospital",
    "Neuromax Hospital",
    "Neurosurgery",
    "Neurology",
    "Brain and Spine Care",
    "Cardiology",
    "Gastroenterology",
    "Nephrology",
    "Urology",
    "Orthopaedics",
    "Hospital",
  ],
  openGraph: {
    title: "Jain Neuromax Hospital",
    description:
      "Expert care, advanced medicine and trusted specialists.",
    type: "website",
    locale: "en_IN",
    siteName: "Jain Neuromax Hospital",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
