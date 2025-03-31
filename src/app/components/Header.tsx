import { SiteHeader } from 'dsds-react/dist/components/SiteHeader';

const customBranding = {
  logo: '/images/logos/Scottish_Government_Logo.svg',
  smallLogo: '/images/logos/Scottish_Government_Logo.svg',
  siteName: 'Scottish Government',
  title: 'Demo microsite',
};

const Header = () => {
  return <SiteHeader branding={customBranding} />;
};

export default Header;
