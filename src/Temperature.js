import React from "react";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <span className="icon">🌤</span>
            <div>
              <strong>19</strong>
              <span className="units">
                <a href="#" className="active">
                  °C{" "}
                </a>{" "}
                |<a href="#">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <ul>
            <li>
              Humidity: <span>80</span>%
            </li>
            <li>
              Wind: <span>10</span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
