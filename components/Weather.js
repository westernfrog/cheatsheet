import $ from "jquery";
import { useEffect } from "react";

export default function Weather() {
  useEffect(() => {
    const defaultApi =
      "https://api.openweathermap.org/data/2.5/weather?&q=Chandigarh&appid=ba0220ef81b4582a85ac35da7e89913c";
    apiJson(defaultApi);

    async function apiJson(defaults) {
      const apiUrlData = await fetch(defaults);
      const apiData = await apiUrlData.json();
      showDefault(apiData);
    }
    function showDefault(DataWeather) {
      $(".city").html(" " + DataWeather.name + ", " + DataWeather.sys.country);
      $(".temp").html(Math.floor(DataWeather.main.temp - 273.15) + "&deg; C");
      $(".weather-icon").attr(
        "src",
        `http://openweathermap.org/img/wn/${DataWeather.weather[0].icon}@2x.png`
      );
      $(".desc").html(DataWeather.weather[0].main);

      let d = new Date(1672323806 * 1000);
      let day = d.toString().slice(0, 15);
      $(".day").html(day);
    }
  }, []);

  function location() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported in your browser!");
    }

    function showPosition(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      getLocation(lat, long);
    }
  }

  function getLocation(latitude, longitude) {
    const apiKey = "ba0220ef81b4582a85ac35da7e89913c";
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    const defaultApi =
      "https://api.openweathermap.org/data/2.5/weather?&q=Chandigarh&appid=ba0220ef81b4582a85ac35da7e89913c";
    apiJson(api);
  }
  async function apiJson(json) {
    const apiUrlData = await fetch(json);
    const apiData = await apiUrlData.json();

    showData(apiData);
  }

  function showData(DataWeather) {
    $(".city").html(" " + DataWeather.name + ", " + DataWeather.sys.country);
    $(".temp").html(Math.floor(DataWeather.main.temp - 273.15) + "&deg; C");
    $(".weather-icon").attr(
      "src",
      `http://openweathermap.org/img/wn/${DataWeather.weather[0].icon}@2x.png`
    );
    $(".desc").html(DataWeather.weather[0].main);

    let d = new Date(1672323806 * 1000);
    let day = d.toString().slice(0, 15);
    console.log(day);
    $(".day").html(day);
  }
  useEffect(() => {
    $(".btn").on("click", function (e) {
      e.preventDefault();
      $(".pin").removeClass("fa-bounce");
    });
  }, []);

  return (
    <>
      <div className="col-md-8 mb-4">
        <div className="card border-dark shadow-sm document">
          <div className="card-header shadow-sm">
            <div className="row">
              <div className="col-9">
                <p className="m-0 text-dm">Weather</p>
              </div>

              <div className="col-3 ms-auto text-end">
                <span>
                  <button
                    className="btn btn-outline-danger rounded-pill py-0 shadow"
                    onClick={location}
                  >
                    <i className="fa-solid fa-location-dot fa-bounce pin"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="card-body text-dark pb-0">
            <h5 className="card-title text-dm mb-0 pb-4 text-center fw-bold">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <span className="city">
                <div className="spinner-grow ms-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </span>
            </h5>

            <div className="row text-center">
              <div className="col-md-4">
                <div className="card border-0">
                  <div className="card-header bg-white text-mono fw-bold temp">
                    <div className="spinner-grow" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  <div className="card-body text-dark ">
                    <h5 className="card-title my-0">
                      <img src="/" className="weather-icon" width={"40px"} />
                      <span className="desc text-mono ms-2">
                        <div className="spinner-grow ms-2" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </span>
                    </h5>
                  </div>
                  <div className="card-footer text-mono fw-bold bg-transparent py-3 day">
                    <div className="spinner-grow" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-lg-block">
                <div className="card border-0">
                  <div className="card-header bg-white text-mono fw-bold temp">
                    <div className="spinner-grow" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  <div className="card-body text-dark ">
                    <h5 className="card-title my-0">
                      <img src="/" className="weather-icon" width={"40px"} />
                      <span className="desc text-mono ms-2">
                        <div className="spinner-grow ms-2" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </span>
                    </h5>
                  </div>
                  <div className="card-footer text-mono fw-bold bg-transparent py-3 day">
                    <div className="spinner-grow" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-lg-block">
                <div className="card border-0">
                  <div className="card-header bg-white text-mono fw-bold temp">
                    <div className="spinner-grow" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  <div className="card-body text-dark ">
                    <h5 className="card-title my-0">
                      <img src="/" className="weather-icon" width={"40px"} />
                      <span className="desc text-mono ms-2">
                        <div className="spinner-grow ms-2" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </span>
                    </h5>
                  </div>
                  <div className="card-footer text-mono fw-bold bg-transparent py-3 day">
                    <div className="spinner-grow" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
