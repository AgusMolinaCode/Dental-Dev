"use client";
import React, { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import ContactForm from "../UI/ContactForm";
import Link from "next/link";
import { FaMapMarked, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPS_ID;
    const map = new mapboxgl.Map({
      container: "map",
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-58.3982376, -34.5973132],
      zoom: 16,
    });

    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker()
      .setLngLat([-58.3982376, -34.5973132])
      .addTo(map);

    // Create a Popup and add it to the marker.
    const popup1 = new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<strong>Sonsiras Sanas</strong><p>Marcelo Torcuato de Alvear 2142, C1122 CABA</p>"
    );
    marker1.setPopup(popup1);

    // Toggle the Popup to make it open by default.
    marker1.togglePopup();
  }, []);

  return (
    <div id="contact">
      <div className="bg-gray-300 border-t border-black px-2 md:px-12 ">
        <h1 className="text-2xl pt-4 sm:pt-14 sm:text-4xl text-center font-medium">
          Contacto
        </h1>
        <p className="text-md text-gray-700 flex justify-center mx-auto max-w-sm text-center">
          Si tenes alguna duda o consulta, no dudes en contactarnos.
        </p>
        <div className="flex flex-wrap justify-center  sm:pt-8 gap-3 mx-auto pb-16">
          <div>
            <div
              id="map"
              className="h-[500px] w-[319px] sm:w-[600px] px-2  md:w-[800px] border border-black rounded-3xl"
            />
            <div className="flex justify-around items-center mx-auto mt-8">
            <div className="flex gap-2 items-center bg-blue-400 hover:bg-blue-600 duration-200 p-2 rounded-xl hover:shadow-2xl">
                <FaMapMarked className="text-gray-100 text-2xl sm:text-4xl" />
                <Link
                  href="https://www.google.com/maps/place/Facultad+de+Odontolog%C3%ADa.+Hospital+Odontolog%C3%ADa+Universitario/@-34.5973132,-58.4008179,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcca94262a1f8b:0xcdeeb398701e08a4!8m2!3d-34.5973132!4d-58.3982376!16s%2Fg%2F120mbqp2?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 text-lg sm:text-xl font-medium"
                >
                  Como llegar
                </Link>
              </div>
              
              <div className="flex gap-2 items-center bg-green-400 hover:bg-green-600 duration-200 p-2 rounded-xl hover:shadow-2xl">
                <FaWhatsapp className="text-gray-100 text-2xl sm:text-4xl" />
                <Link
                  href="https://walink.co/b05ed4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 text-lg sm:text-xl font-medium"
                >
                  Whatsapp
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-8 sm:mt-0 px-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
