import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
import { MdClose } from "react-icons/md";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { TEInput } from "tw-elements-react";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};
const center = {
  lat: 33.513805,
  lng: 36.276527,
};

const Locations = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [address, setAddress] = useState("");
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
    return <div className="text-white" >Loading maps</div>;
  }

  const onMarkerClick = (e) => {
    const coordinates = e.latLng;

    setCoordinates(coordinates);
    console.log(coordinates);
  };

  const onMapClick = (e) => {
    const coordinates = e.latLng;
    setCoordinates(coordinates);
    const latitude = coordinates.lat();
    const longitude = coordinates.lng();

    console.log(`Latitude: ${latitude}\nLongitude: ${longitude}`);
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: coordinates }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const address = results[0].formatted_address;
        setAddress(address);
      }
    });
  };

  return (
    <div>
      <input
        onClick={functionopenpopuplocation}
        value={address}
        type="address"
        id="InputAddress"
        label="Address"
        placeholder="Address"
        className="mb-4 outline-none bg-transparent border-b-2 border-white text-white w-full cursor-pointer placeholder:text-white "
      />

      <Dialog
        open={openlocation}
        onClose={closepopuplocation}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Location
          <IconButton onClick={closepopuplocation} style={{ float: "right" }}>
            {/* <CloseIcon color="primary"></CloseIcon> */}
            <MdClose className="text-black" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                onClick={onMapClick}
              >
                <Marker position={coordinates}  />
              </GoogleMap>
            )}

            {/* <p>Latitude: {coordinates.lat()}</p>
               <p>Longitude: {coordinates.lng()}</p> */}
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
