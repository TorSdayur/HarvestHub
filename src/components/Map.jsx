/*
Author: Nathan Vazquez
CTP Hackathon 2024 
Team: DTNL - Driven To Navigate Life
Project: Harvest Hub
*/

// Importing necessary libraries
import { useEffect, useState } from 'react'

import { Icon, divIcon, markerClusterGroup, point } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster';

import supabase from '../utils/supabase'

import 'leaflet/dist/leaflet.css';
import "../styles/Map.css"

// Author: Tor Sdayur
// recenters map once user location from browser is fetched
const RecenterAutomatically = ({lat,lng}) => {
  const map = useMap();
    useEffect(() => {
      if (lat !== undefined && lng !== undefined) {
        map.setView([lat, lng], 13);
      }
    }, [lat, lng]);
    return null;
  }

export default function Map({location}) {
  const [currLoc, setCurrLoc] = useState({});

  // create icon for all Dental resources
  const dentalIcon = new Icon({
    iconUrl: "https://www.svgrepo.com/show/455526/dental-plus.svg",
    iconSize: [38, 38]
  })

  // create icon for all food resources
  const foodSiteIcon = new Icon({
    iconUrl: "https://www.svgrepo.com/show/494450/food-market-purchasing.svg",
    iconSize: [38, 38]
  })

  // create icon for all shelter resources
  const shelterMarkerIcon = new Icon({
    iconUrl: "https://www.svgrepo.com/show/126102/shelter.svg",
    iconSize: [38, 38]
  })

  // create icon for all sex Health clinics resources
  const sexHealthClinicMarkerIcon = new Icon({
    iconUrl: "https://www.svgrepo.com/show/326199/health-worker.svg",
    iconSize: [38, 38]
  })

  // create icon for all CUNY food resources
  const cunyFoodMarkerIcon = new Icon({
    iconUrl: "https://www.svgrepo.com/show/533533/school-flag.svg",
    iconSize: [38, 38]
  })

  // Define states for all dental sites
  const [dentalSites, setDentalSites] = useState([]);
  // create array for dental marker objects
  const dentalMarkers = [];
  //function to call Supabase database and retrieve all the date from dental table
  async function getDentalSites() {
    const { data } = await supabase.from("dental").select();
    //set the state equal to the data recieved from the supabase DB
    setDentalSites(data);
  }

  // function to add location, phone and name data to dental marker array
  function addAllDentalMarkers() {
    // map function runs the function for each item in the array
    dentalSites.map((dentalSite) => {
      // test if the row has a latitude, longitude and contact #
      if (dentalSite.LATITUDE && dentalSite.LONGITUDE && dentalSite.Phone) {
        // if it does, it will push the object to the markers array
        dentalMarkers.push({
          // geocode contains an array of the latitude and longitude data
          geocode: [dentalSite.LATITUDE, dentalSite.LONGITUDE],
          // popup contains the resources name for the dental site
          popUp: dentalSite["Clinic Name"],
          // contact contains the data for the dental site phone number
          contact: dentalSite.Phone
        })
      }
    })
  }

  // Define states for all food sites
  const [foodSites, setFoodSites] = useState([]);
  // create array for food site marker objects
  const foodSiteMarkers = [];
  //function to call Supabase database and retrieve all the date from food site table
  async function getFoodSites() {
    //set the state equal to the data recieved from the supabase DB
    const { data } = await supabase.from("food").select();
    setFoodSites(data);
  }
  // function to add location, phone and name data to food site marker array
  function addAllFoodSiteMarkers() {
    // map function runs the function for each item in the array
    foodSites.map((foodSite) => {
      // test if the row has a latitude, longitude and contact #
      if (foodSite.LATITUDE && foodSite.LONGITUDE && foodSite.PHONE) {
        // if it does, it will push the object to the markers array
        foodSiteMarkers.push({
          geocode: [foodSite.LATITUDE, foodSite.LONGITUDE],
          popUp: foodSite["PROGRAM"],
          contact: foodSite.PHONE
        })
      }
    })
  }
  // Define states for all shelter sites
  const [shelters, setShelters] = useState([]);
  // create array for shelter marker objects
  const shelterMarkers = [];
  //function to call Supabase database and retrieve all the date from shelter table
  async function getShelters() {
    //set the state equal to the data recieved from the supabase DB
    const { data } = await supabase.from("shelters").select();
    setShelters(data);
  }
  // function to add location, phone and name data to shelter marker array
  function addAllShelterMarkers() {
    // map function runs the function for each item in the array
    shelters.map((shelter) => {
      // test if the row has a latitude, longitude and contact #
      if (shelter.Latitude && shelter.Longitude) {
        // if it does, it will push the object to the markers array
        shelterMarkers.push({
          geocode: [shelter.Latitude, shelter.Longitude],
          popUp: shelter["Center Name"]
        })
      }
    })
  }

  // Define states for all dental sites
  const [sexHealthClinics, setSexHealthClinics] = useState([]);
  // create array for dental marker objects
  const sexHealthClinicMarkers = [];
  //function to call Supabase database and retrieve all the date from sex health clinic table
  async function getSexHealthClinics() {
    //set the state equal to the data recieved from the supabase DB
    const { data } = await supabase.from("sex_health_clinics").select();
    setSexHealthClinics(data);
  }
  // function to add location, phone and name data to sex health clinic marker array
  function addAllSexHelthClinicsMarkers() {
    // map function runs the function for each item in the array
    sexHealthClinics.map((sexHealthClinic) => {
      // test if the row has a latitude, longitude and contact #
      if (sexHealthClinic.LATITUDE && sexHealthClinic.LONGITUDE) {
        // if it does, it will push the object to the markers array
        sexHealthClinicMarkers.push({
          geocode: [sexHealthClinic.LATITUDE, sexHealthClinic.LONGITUDE],
          popUp: sexHealthClinic["Clinic Name"]
        })
      }
    })
  }

  // Define states for all cuny food sites
  const [cunyFoodSites, setCunyFoodSites] = useState([]);
  // create array for cuny food marker objects
  const cunyFoodSiteMarkers = [];
  //function to call Supabase database and retrieve all the date from cuny food table
  async function getCunyFoodSites() {
    //set the state equal to the data recieved from the supabase DB
    const { data } = await supabase.from("cuny_food").select();
    setCunyFoodSites(data);
  }
  // function to add location, phone and name data to dental marker array
  function addAllCunyFoodSiteMarkers() {
    // map function runs the function for each item in the array
    cunyFoodSites.map((cunyFoodSite) => {
      // test if the row has a latitude, longitude and contact #
      if (cunyFoodSite.Latitude && cunyFoodSite.Longitude && cunyFoodSite.phone) {
        // if it does, it will push the object to the markers array
        cunyFoodSiteMarkers.push({
          geocode: [cunyFoodSite.Latitude, cunyFoodSite.Longitude],
          popUp: cunyFoodSite["School"],
          contact: cunyFoodSite.phone
        })
      }
    })
  }


  useEffect(() => {
    getDentalSites();
    getFoodSites();
    getShelters();
    getSexHealthClinics()
    getCunyFoodSites()
  }, []);

  useEffect(() => {
    setCurrLoc(location)
  }, [location]);

  return (
    <>
      {addAllDentalMarkers()}
      {addAllFoodSiteMarkers()}
      {addAllShelterMarkers()}
      {addAllSexHelthClinicsMarkers()}
      {addAllCunyFoodSiteMarkers()}

      <div className="map">
        <MapContainer center={[40.768538, -73.964741]} zoom={13}>
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

          />
          <MarkerClusterGroup
            chunkedLoading
          >
            {dentalMarkers.map((marker,index) => (
              <Marker key={index} position={marker.geocode} icon={dentalIcon}>
                <Popup>
                  <p>{marker.popUp}</p>
                  <p>{marker.contact}</p>
                </Popup>
              </Marker>
            ))}

            {foodSiteMarkers.map((marker,index) => (
              <Marker key={index} position={marker.geocode} icon={foodSiteIcon}>
                <Popup>
                  <p>{marker.popUp}</p>
                  <p>{marker.contact}</p>
                </Popup>
              </Marker>
            ))}

            {shelterMarkers.map((marker,index) => (
              <Marker key={index} position={marker.geocode} icon={shelterMarkerIcon}>
                <Popup><p>{marker.popUp}</p>
                </Popup>
              </Marker>
            ))}

            {cunyFoodSiteMarkers.map((marker,index) => (
              <Marker key={index} position={marker.geocode} icon={cunyFoodMarkerIcon}>
                <Popup>
                  <p>{marker.popUp}</p>
                  <p>{marker.contact}</p>
                </Popup>
              </Marker>
            ))}

            {sexHealthClinicMarkers.map((marker,index) => (
              <Marker key={index} position={marker.geocode} icon={sexHealthClinicMarkerIcon}>
                <Popup><p>{marker.popUp}</p>
                </Popup>
              </Marker>
            ))}
            
          </MarkerClusterGroup>
          <RecenterAutomatically
            lat={currLoc.latitude}
            lng={currLoc.longitude}
          />
        </MapContainer>
      </div>
    </>
  )

}