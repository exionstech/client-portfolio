// src/pages/_app.js
import NavBar from "@/Components/NavBar";
import localFont from 'next/font/local';
import "@/styles/globals.css";
import Footer from "@/Components/Footer";
import ContactUs from "@/Components/ContactUs";

// Define the Gallient font
const gallientFont = localFont({
  src: './fonts/GallientRegular-eZoMp.ttf',
  variable: '--font-gallient',
  weight: '100 700', 
});

// Define the Gotu font
const gotuFont = localFont({
  src: './fonts/Gotu-Regular.ttf',
  variable: '--font-gotu',
  weight: '400', 
},
);
 const SourceSerifFont = localFont({
  src: './fonts/SourceSerif4-VariableFont_opsz,wght.ttf',
  variable: '--font-sourceserif',
  weight: '100 700', 
},);

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`${gallientFont.variable} ${gotuFont.variable} ${SourceSerifFont.variable}`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer/>
      </div>
    </>
  );
}
