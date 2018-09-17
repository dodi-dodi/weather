import axios from 'axios'


const current_data = {
  "static": true,
  "LocalObservationDateTime": "2018-03-18T15:55:00+01:00",
  "EpochTime": 1521384900,
  "WeatherText": "Sunny",
  "WeatherIcon": 1,
  "IsDayTime": true,
  "Temperature": {
    "Metric": {
      "Value": -3.3,
      "Unit": "C",
      "UnitType": 17
    },
  },
  "RealFeelTemperature": {
    "Metric": {
      "Value": -7.7,
      "Unit": "C",
      "UnitType": 17
    },
  },
};
const forecast_data = {
  "static": true,
  "Headline": {
    "EffectiveDate": "2018-03-20T13:00:00+01:00",
    "EffectiveEpochDate": 1521547200,
    "Severity": 6,
    "Text": "Snow flurries Tuesday afternoon",
    "Category": "snow",
    "EndDate": "2018-03-20T19:00:00+01:00",
    "EndEpochDate": 1521568800,
    "MobileLink": "http://m.accuweather.com/en/pl/warsaw/274663/extended-weather-forecast/274663?unit=c&lang=en-us",
    "Link": "http://www.accuweather.com/en/pl/warsaw/274663/daily-weather-forecast/274663?unit=c&lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2018-03-18T07:00:00+01:00",
      "EpochDate": 1521352800,
      "Temperature": {
        "Minimum": {
          "Value": -9.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": -0.4,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds"
      },
      "Night": {
        "Icon": 31,
        "IconPhrase": "Cold"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/pl/warsaw/274663/daily-weather-forecast/274663?day=1&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/pl/warsaw/274663/daily-weather-forecast/274663?day=1&unit=c&lang=en-us"
    },
    {
      "Date": "2018-03-19T07:00:00+01:00",
      "EpochDate": 1521439200,
      "Temperature": {
        "Minimum": {
          "Value": -8.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 0.6,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 6,
        "IconPhrase": "Mostly cloudy"
      },
      "Night": {
        "Icon": 7,
        "IconPhrase": "Cloudy"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/pl/warsaw/274663/daily-weather-forecast/274663?day=2&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/pl/warsaw/274663/daily-weather-forecast/274663?day=2&unit=c&lang=en-us"
    },
    {
      "Date": "2018-03-20T07:00:00+01:00",
      "EpochDate": 1521525600,
      "Temperature": {
        "Minimum": {
          "Value": -5.6,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 2.6,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 19,
        "IconPhrase": "Flurries"
      },
      "Night": {
        "Icon": 35,
        "IconPhrase": "Partly cloudy"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/pl/warsaw/274663/daily-weather-forecast/274663?day=3&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/pl/warsaw/274663/daily-weather-forecast/274663?day=3&unit=c&lang=en-us"
    },
    {
      "Date": "2018-03-21T07:00:00+01:00",
      "EpochDate": 1521612000,
      "Temperature": {
        "Minimum": {
          "Value": -4.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 3.4,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 3,
        "IconPhrase": "Partly sunny"
      },
      "Night": {
        "Icon": 38,
        "IconPhrase": "Mostly cloudy"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/pl/warsaw/274663/daily-weather-forecast/274663?day=4&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/pl/warsaw/274663/daily-weather-forecast/274663?day=4&unit=c&lang=en-us"
    },
    {
      "Date": "2018-03-22T07:00:00+01:00",
      "EpochDate": 1521698400,
      "Temperature": {
        "Minimum": {
          "Value": -1.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 5.3,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds"
      },
      "Night": {
        "Icon": 19,
        "IconPhrase": "Flurries"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/pl/warsaw/274663/daily-weather-forecast/274663?day=5&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/pl/warsaw/274663/daily-weather-forecast/274663?day=5&unit=c&lang=en-us"
    }
  ]
};

const API_KEY = 'qWAkpSYSQjcUJ6ClLcoAau1J2cU3IkGI'; // yes I know it shouldn't be here but .. well
const API_BASE_URL = 'https://dataservice.accuweather.com';
const WARSAW = '274663';

export async function getCurrent() {
  let uri = `${API_BASE_URL}/currentconditions/v1/${WARSAW}?apikey=${API_KEY}&details=true`;
  try {
    let response = await axios.get(uri);
    return response.data[0]
  } catch (err) {
    return current_data
  }
}

export async function getForecast() {
  let uri = `${API_BASE_URL}/forecasts/v1/daily/5day/${WARSAW}?apikey=${API_KEY}&details=true&metric=true`;
  try {
    let response = await axios.get(uri);
    return response.data
  } catch (err) {
    return forecast_data
  }
}
