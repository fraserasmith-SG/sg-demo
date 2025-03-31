import React from 'react';
import { FeatureHeader } from 'dsds-react/dist/components/FeatureHeader';

const HomePage = () => {
  return (
    <div>
      {/* Full-width background */}
      <div style={{ backgroundColor: '#0065bd' }}>
        {/* Use ds_wrapper to center content; remove top padding with pt-0 */}
        <div className="ds_wrapper py-8">
          <FeatureHeader
            title={<strong className="font-bold" style={{ color: 'white' }}>Design histories</strong>}
            content={<p className="font-normal" style={{ color: 'white' }}>We work in the open across the Scottish Government. Find out how our services change over time through our teams' design histories.</p>}
            hasBackground={false}
            image={{
              src: '/images/page-header-graphic.svg',
              alt: 'Feature Header Image',
              className: 'w-1/4',
            }}
            type="feature-header"
            style="wide"  // Updated style to pass the string directly for now
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
