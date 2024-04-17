import React, { useState } from 'react';
import Overview from './Overview';
import Contacts from './Contacts';


export default function Hero() {
  const [breadcrumb, setBreadcrumb] = useState(
    <div className="breadcrumb">
      <span className="body-medium secondary-text-gray">Home</span> 
      <span className='right-icon'>
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.52827 12.0299C5.26792 12.2902 5.26792 12.7124 5.52827 12.9727C5.78862 13.2331 6.21073 13.2331 6.47108 12.9727L10.4711 8.97271C10.7314 8.71236 10.7314 8.29025 10.4711 8.0299L6.47108 4.0299C6.21073 3.76955 5.78862 3.76955 5.52827 4.0299C5.26792 4.29025 5.26792 4.71236 5.52827 4.97271L9.05687 8.5013L5.52827 12.0299Z" fill="#595959"/>
        </svg>
      </span> 
      <span className="primary-text body-medium ubuntu-medium">Overview</span>
    </div>
  );

  const [activeTab, setActiveTab] = useState('overview');

  const handleTabChange = (tab) => {
  setActiveTab(tab);
  if (tab === 'overview') {
    setBreadcrumb(
      <div className="breadcrumb">
        <span className="body-medium secondary-text-gray">Home</span>
        <span className='right-icon'>
        <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.52827 12.0299C5.26792 12.2902 5.26792 12.7124 5.52827 12.9727C5.78862 13.2331 6.21073 13.2331 6.47108 12.9727L10.4711 8.97271C10.7314 8.71236 10.7314 8.29025 10.4711 8.0299L6.47108 4.0299C6.21073 3.76955 5.78862 3.76955 5.52827 4.0299C5.26792 4.29025 5.26792 4.71236 5.52827 4.97271L9.05687 8.5013L5.52827 12.0299Z" fill="#595959"/>
        </svg>
        </span>
        <span className="primary-text body-medium ubuntu-medium">Overview</span>
      </div>
    );
  } else if (tab === 'contacts') {
    setBreadcrumb(
      <div className="breadcrumb">
        <span className="body-medium secondary-text-gray">Home</span>
        <span className='right-icon'>
        <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.52827 12.0299C5.26792 12.2902 5.26792 12.7124 5.52827 12.9727C5.78862 13.2331 6.21073 13.2331 6.47108 12.9727L10.4711 8.97271C10.7314 8.71236 10.7314 8.29025 10.4711 8.0299L6.47108 4.0299C6.21073 3.76955 5.78862 3.76955 5.52827 4.0299C5.26792 4.29025 5.26792 4.71236 5.52827 4.97271L9.05687 8.5013L5.52827 12.0299Z" fill="#595959"/>
        </svg>
        </span>
        <span className="primary-text body-medium ubuntu-medium">Contacts</span>
      </div>
    );
  }
};

  return (
    <div>
      <div className='hero-main'>
        <div className='hero-main-inner'>
          <div>{breadcrumb}</div>
          <h1 className='title primary-medium primary-text-black ubuntu-medium'>Welcome to Druce</h1>
          <div>
            <button onClick={() => handleTabChange('overview')} className={activeTab === 'overview' ? 'primary-tab active' : 'non-active'}>Overview</button>
            <button onClick={() => handleTabChange('contacts')} className={activeTab === 'contacts' ? 'primary-tab active' : 'non-active'}>Contacts</button>
          </div>
        </div>
      </div>
      <div className='hero-body'>
          <div className="main-container">
          <div className="inner-container">
              {activeTab === 'overview' && <Overview/>}
              {activeTab === 'contacts' && <Contacts/>}
          </div>
          </div>
      </div>
    </div>
  );
}