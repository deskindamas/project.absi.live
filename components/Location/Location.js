import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { FaMapLocationDot } from "react-icons/fa6";
const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};
const center = {
  lat: 33.513805,
  lng: 36.276527,
};

const Locations = ({ onLocation, className, defaultAddress }) => {
  const [coordinates, setCoordinates] = useState();
  const [address, setAddress] = useState();
  let google;
  const [openlocation, openchangelocation] = useState(false);
  const functionopenpopuplocation = () => {
    openchangelocation(true);
  };
  const closepopuplocation = () => {
    openchangelocation(false);
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyALBvB0SHMQXa0IGf_sI-2ewEzPlhwg2xk",
    libraries,
  });

  if (isLoaded) {
    google = window.google;
  }

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div className="text-white">Loading maps</div>;
  }

  const onMapClick = (e) => {
    const coordinates = e.latLng;
    setCoordinates(coordinates);
    const latitude = coordinates.lat();
    const longitude = coordinates.lng();
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: coordinates }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const address = results[0].formatted_address;
        onLocation({ address, lng: longitude, lat: latitude });
        setAddress(address);
      }
    });
  };

  return (
    <div className=" w-full ">
      {/* <button className="p-2 border-2 white" 
        
      > */}
      <div className="flex w-full justify-start items-center space-x-3">
        <FaMapLocationDot
          onClick={functionopenpopuplocation}
          className={`hover:border-b-2 py-[5px] hover:border-white cursor-pointer w-[30px] h-[30px] ${className}`}
        />
        {/* {defaultAddress && <p>{defaultAddress}</p>} */}
        {address ? (
          // <p className="text-white truncate ">H9H4+6J5, Alassad Suburb, Syria H9H4+6J5, Alassad Suburb, Syria </p>
          <p className={`text-white text-ellipsis truncate sm:max-w-sm ${className} max-w-[200px]`}>{address}</p>
        ) : (
          defaultAddress && <p className = {`${className} text-white`}>{defaultAddress}</p>
        )}
      </div>

      {/* </button> */}
      {/* <span
        id="InputAddress"

        placeholder={defaultAddress ? defaultAddress : "Address"}
        className={`${className}`}
      >
        {address && address}
      </span> */}

      <Dialog
        open={openlocation}
        onClose={closepopuplocation}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle className="flex justify-between items-center" >
          Location
          <IconButton onClick={closepopuplocation} >
            {/* <MdClose className="text-black" /> */}
            <p className="text-black sm:text-lg text-sm border-b border-transparent hover:border-black" >Save</p>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            {google && (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                onClick={onMapClick}
              >
                {coordinates && <MarkerF position={coordinates} />}
              </GoogleMap>
            )}
          </Stack>
        </DialogContent>
        <div className="md:flex-row md:justify-start md:items-center md:gap-2 flex flex-col justify-start items-start pb-5 px-5 ">
          <p className="text-black text-lg"> Chosen Address : </p>
          <p className="text-black text-lg">{address}</p>
        </div>
      </Dialog>
    </div>
  );
};

export default Locations;
