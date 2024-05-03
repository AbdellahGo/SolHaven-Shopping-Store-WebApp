import React from 'react'

const LocationMap = ({divStyles, iframeStyles}) => {
  return (
    <div className={`${divStyles}`}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56215.718841453985!2d-0.19959027821222705!3d51.48739183082915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slondon%20eye!5e0!3m2!1sen!2sbd!4v1656749326947!5m2!1sen!2sbd"
        loading='lazy' className={`${iframeStyles} h-full w-full border-none `}></iframe>
    </div>
  )
}

export default LocationMap