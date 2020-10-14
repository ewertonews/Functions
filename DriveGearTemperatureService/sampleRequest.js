let myHeaders = new Headers();
myHeaders.append("x-functions-key", "xxxxxxx");
myHeaders.append("Content-Type", "application/json");


const reqBody = 
{
    "readings":[
       {
          "driveGearId":1,
          "timestamp":1534263995,
          "temperature":23
       },
       {
          "driveGearId":3,
          "timestamp":1534264048,
          "temperature":45
       },
       {
          "driveGearId":18,
          "timestamp":1534264050,
          "temperature":55
       }
    ]
 }
const raw = JSON.stringify(reqBody);

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://escalator-functions-ews.azurewebsites.net/api/DriveGearTemperatureService", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));