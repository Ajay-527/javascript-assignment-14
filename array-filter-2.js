let hospitals = [
  {
    id: 1,
    name: "Hospital A",
    location: "Delhi",
    noOfBeds: 450,
    availability: "Yes",
  },
  {
    id: 2,
    name: "Hospital B",
    location: "Pune",
    noOfBeds: 150,
    availability: "No",
  },
  {
    id: 3,
    name: "Hospital C",
    location: "Pune",
    noOfBeds: 350,
    availability: "Yes",
  },
];

console.log("Number of Beds greater than 200");
hospitals.filter((data) => {
  if (data.noOfBeds > 200) {
    console.log(data);
  }
});

console.log("Availability of Beds Yes");
hospitals.filter((data) => {
  if (data.availability === "Yes") {
    console.log(data);
  }
});

console.log("Location Pune");
hospitals.filter((data) => {
  if (data.location === "Pune") {
    console.log(data);
  }
});
