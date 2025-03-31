import { SiteFooter } from 'dsds-react/dist/components/SiteFooter';

const footerMenuItems = [
  { href: '/about', content: 'Privacy' },
  { href: '/contact', content: 'Cookies' },
  { href: '/privacy', content: 'Accessibility' },
];

const footerCopyright = {
  content: (
    <div className="ds_site-footer__copyright">
      <a className="ds_site-footer__copyright-logo" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">
        <img src="/images/logos/OGL.svg" alt="Open Government License" />
      </a>
      <br />
      <p>
        All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">
          Open Government Licence v3.0
        </a>, except for graphic assets and where otherwise stated
      </p>
      <p>&copy; Crown Copyright</p>
    </div>
  ),
};

const footerOrganisation = {
  logo: {
    src: '/images/logos/unicorn-rampant.svg',
    alt: 'Scottish Government Logo',
    link: 'https://www.gov.scot',
  },
};

const Footer = () => {
  return (
    <footer className="ds_site-footer">
      <div className="ds_wrapper">
        <div className="ds_site-footer__content">
          {/* Site Footer Menu */}
          <SiteFooter
            menuItems={footerMenuItems}
            copyright={footerCopyright}
            organisation={footerOrganisation}
            className="ds_site-footer__site-items"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
