exports.room = {
  "@id": "dtmi:samples:Room;1",
  "@type": "Interface",
  "@context": "dtmi:dtdl:context;2",
  displayName: "Room",
  contents: [
    {
      "@type": "Property",
      name: "Temperature",
      schema: "double"
    },
    {
      "@type": "Property",
      name: "Humidity",
      schema: "double"
    },
    {
      "@type": "Property",
      name: "IsOccupied",
      schema: "boolean"
    },
    {
      "@type": "Property",
      name: "EmployeeId",
      schema: "string"
    },
    {
      "@type": "Component",
      name: "wifiAccessPoint",
      schema: "dtmi:samples:Wifi;1"
    }
  ]
};
