function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
 
let latCoords = document.querySelector("#loc_lat")
let lonCoords = document.querySelector("#loc_lon")

if (latCoords.value <= 90 && latCoords.value >= -90 && lonCoords.value <= 180 && lonCoords.value >= -180)
{
  return event;
}
else 
{
  let errormsglat = document.querySelector("#errorlat")
  let errormsglon = document.querySelector("#errorlon")
  errormsglat.innerText = ""
  errormsglon.innerText = ""

  errormsglat.innerHTML += "must be a valid Latitude (-90 to 90)"
  errormsglon.innerHTML += "must be a valid Longitude (-180 to 180)"
  return false;
}
  
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
