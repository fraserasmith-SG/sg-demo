import '../styles/main.scss';
import { PropsWithChildren } from 'react';
import Header from './components/Header';  // Custom Header component
import Footer from './components/Footer';  // Custom Footer component
import CustomPhaseBanner from './components/PhaseBanner';  // Custom PhaseBanner component

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* Global Header */}
        <Header />

        {/* Phase Banner */}
        <CustomPhaseBanner />

        {/* Main content */}
        <main>{children}</main>

        {/* Global Footer */}
        <Footer />
        </body>
    </html>
  );
};

export default Layout;
