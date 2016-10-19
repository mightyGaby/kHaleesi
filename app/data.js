export const khaleesi = [
  {
    "firstName": "Joe",
    "lastName": "Slater",
    "userName": "slater407",
    "emailAddress": "test@gmail.com",
    "phone": "",
    "uuid": "123456",
    "NOH": false, // naloxone on hand - boolean
    "available": false,  // boolean - defaults to false until khaleesi confirms availabile
    "location": {
      "lat": "",
      "lng": ""
    },
    "users": {
      "name": "",
      "uuid": "",
      "status": "",
      "phone": ""
    }
  },
  {
    "firstName": "Gaby",
    "lastName": "Ruiz-Funes",
    "userName": "gabgirl24",
    "emailAddress": "test@gmail.com",
    "phone": "",
    "uuid": "",
    "NOH": true, // naloxone on hand - boolean
    "available": false,  // boolean - defaults to false until khaleesi confirms availabile
    "location": {
      "lat": "",
      "lng": ""
    },
    "users": {
      "firstName": "",
      "uuid": "",
      "status":"",
      "phone": ""
    }
  }
];

export const user =[
  {
    "firstName": "",
    "lastName": "",
    "userName": "",
    "phone": "",
    "uuid":"",
    "triggered": "",  // boolean
    "location": {
      "lat": "",
      "lng": ""
    },
    "khaleesis": {
      "firstName":"",
      "uuid": "",
      "available": false,
      "notified": false,
      "phone": ""
    }
  },
  {
    "firstName": "",
    "lastName": "",
    "userName": "",
    "uuid": "",
    "triggered": "",  // bolean
    "location": {
      "lat": "",
      "lng": ""
    },
    "khaleesis": {
      "firstName": "",
      "uuid": "",
      "available": false,
      "notified": false,
      "phone": ""
    }
  }
];

export const box = [
  {
    "boxId": "",
    "landmark": "",
    "empty": false, // boolean
    "PIN": {
      "code": 242451,
      "PinActivated": false,
      "timeGenerated": "",
      "expires": ""
    },
    "location": {
      "lat": "",
      "lng": ""
    },
  },
  {
    "boxId": "",
    "landmark": "",
    "empty": false, // boolean
    "PIN": {
      "code": 242451,
      "PinActivated": true,
      "timeGenerated": "",
      "expires": ""
    },
    "location": {
      "lat": "",
      "lng": ""
    },
  },
  {
    "boxId": "",
    "landmark": "",
    "empty": true, // boolean
    "PIN": {
      "code": 111111,
      "PinActivated": false,
      "timeGenerated": "",
      "expires": ""
    },
    "location": {
      "lat": "",
      "lng": ""
    },
  }
];
