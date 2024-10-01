import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./LocationComponent.module.css";

export function LocationTable() {
  // Sample data for the table
  const initialData = [
    {
      location: "2134 Parkway, Pigeon Forge, CA",
      building: "Building #1",
      coverage: "Building Coverage",
      limit: "100000.00",
      deductible: "2500",
      coinsurance: "80%",
      blanket: "None",
    },
    {
      location: "2134 Parkway, Pigeon Forge, CA",
      building: "Building #2",
      coverage: "Business Personal Property Coverage",
      limit: "12000.00",
      deductible: "2500",
      coinsurance: "None",
      blanket: "None",
    },
    {
      location: "2135 Parkway, Pigeon Forge, CA",
      building: "Building #3",
      coverage: "Building Coverage",
      limit: "123000.00",
      deductible: "3000",
      coinsurance: "75%",
      blanket: "Included",
    },
  ];

  // State for filters
  const [searchLocation, setSearchLocation] = useState("");
  const [searchBuilding, setSearchBuilding] = useState("");
  const [searchCoverage, setSearchCoverage] = useState("");
  const [searchLimit, setSearchLimit] = useState("");
  const [searchDeductible, setSearchDeductible] = useState("");
  const [searchCoinsurance, setSearchCoinsurance] = useState("");
  const [searchBlanket, setSearchBlanket] = useState("");

  // Filter data based on search input
  const filteredData = initialData.filter((row) => {
    return (
      row.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
      row.building.toLowerCase().includes(searchBuilding.toLowerCase()) &&
      row.coverage.toLowerCase().includes(searchCoverage.toLowerCase()) &&
      row.limit.toLowerCase().includes(searchLimit.toLowerCase()) &&
      row.deductible.toLowerCase().includes(searchDeductible.toLowerCase()) &&
      row.coinsurance.toLowerCase().includes(searchCoinsurance.toLowerCase()) &&
      row.blanket.toLowerCase().includes(searchBlanket.toLowerCase())
    );
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{ backgroundColor: "ghostwhite" }}>
              <span>Location</span>
              <input
                type="text"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                placeholder=""
              />
            </th>
            <th scope="col" style={{ backgroundColor: "ghostwhite" }}>
              <span>Building</span>
              <input
                type="text"
                value={searchBuilding}
                onChange={(e) => setSearchBuilding(e.target.value)}
                placeholder=""
              />
            </th>
            <th scope="col" style={{ backgroundColor: "ghostwhite" }}>
              <span>Coverage</span>
              <input
                type="text"
                value={searchCoverage}
                onChange={(e) => setSearchCoverage(e.target.value)}
                placeholder=""
              />
            </th>
            <th scope="col" style={{ backgroundColor: "ghostwhite" }}>
              <span>Limit</span>
              <input
                type="text"
                value={searchLimit}
                onChange={(e) => setSearchLimit(e.target.value)}
                placeholder=""
              />
            </th>
            <th scope="col" style={{ backgroundColor: "ghostwhite" }}>
              <span>Deductible</span>
              <input
                type="text"
                value={searchDeductible}
                onChange={(e) => setSearchDeductible(e.target.value)}
                placeholder=""
              />
            </th>
            <th scope="col" style={{ backgroundColor: "ghostwhite" }}>
              <span>Coinsurance</span>
              <input
                type="text"
                value={searchCoinsurance}
                onChange={(e) => setSearchCoinsurance(e.target.value)}
                placeholder=""
              />
            </th>
            <th scope="col" style={{ backgroundColor: "ghostwhite" }}>
              <span>Included in Blanket</span>
              <input
                type="text"
                value={searchBlanket}
                onChange={(e) => setSearchBlanket(e.target.value)}
                placeholder=""
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row, index) => (
              <tr key={index}>
                <th scope="row">{row.location}</th>
                <td>{row.building}</td>
                <td>{row.coverage}</td>
                <td>{row.limit}</td>
                <td>{row.deductible}</td>
                <td>{row.coinsurance}</td>
                <td>{row.blanket}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No results found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LocationTable;
