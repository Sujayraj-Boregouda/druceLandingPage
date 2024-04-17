import React from 'react';

const Services = ({ properties }) => {
  return (
    <>
    <h2 className='primary-high black-text ubuntu-regular'>Property Services</h2>
    <section className='propertyCardSection'>
        {properties.map((property, index) => (
            <div key={index} className='property-card'>
                <img src={property.imageUrl} alt={property.title}></img>

                <div className='property-data'>
                  <div className='property-title-sec'>
                    <h2 className='secondary-fs black-text ubuntu-regular'>{property.title}</h2>
                    <div className='learn-more'>
                      <span className='lm-icon'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.61461 10.3961H7.78461V6.88609H6.61461V10.3961ZM7.19961 1.62109C3.97041 1.62109 1.34961 4.24189 1.34961 7.47109C1.34961 10.7003 3.97041 13.3211 7.19961 13.3211C10.4288 13.3211 13.0496 10.7003 13.0496 7.47109C13.0496 4.24189 10.4288 1.62109 7.19961 1.62109ZM7.19961 12.1511C4.61976 12.1511 2.51961 10.0509 2.51961 7.47109C2.51961 4.89124 4.61976 2.79109 7.19961 2.79109C9.77946 2.79109 11.8796 4.89124 11.8796 7.47109C11.8796 10.0509 9.77946 12.1511 7.19961 12.1511ZM6.61461 5.71609H7.78461V4.54609H6.61461V5.71609Z" fill="#2094E9"/>
                          <path d="M6.61426 4.54297H7.78426V5.71297H6.61426V4.54297ZM6.61426 6.88297H7.78426V10.393H6.61426V6.88297Z" fill="#2094E9"/>
                          <path d="M7.19961 1.62109C3.97041 1.62109 1.34961 4.24189 1.34961 7.47109C1.34961 10.7003 3.97041 13.3211 7.19961 13.3211C10.4288 13.3211 13.0496 10.7003 13.0496 7.47109C13.0496 4.24189 10.4288 1.62109 7.19961 1.62109ZM7.19961 12.1511C4.61976 12.1511 2.51961 10.0509 2.51961 7.47109C2.51961 4.89124 4.61976 2.79109 7.19961 2.79109C9.77946 2.79109 11.8796 4.89124 11.8796 7.47109C11.8796 10.0509 9.77946 12.1511 7.19961 12.1511Z" fill="#2094E9"/>
                        </svg>
                      </span>
                      <span className='blue-text caption-text'>
                        Learn More
                      </span>
                    </div>
                  </div>
                  
                  <p className='light-gray body-medium'>{property.desc}</p>

                  <a href="/rent" className='btn-mega'>
                  Book a Market Appraisal
                  </a>
                </div>
            </div>
        ))}
    </section>
    </>
  );
};

export default Services;
