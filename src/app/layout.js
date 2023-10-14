import './globals.css';


export const metadata = {
  title: 'Google-Keep : Firebase',
  description: 'Google Keep Project',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
