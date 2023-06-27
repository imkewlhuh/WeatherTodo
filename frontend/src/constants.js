export const weatherURL = import.meta.env.VITE_API_URL;

let apiURL = '';

if (process.env.NODE_ENV === 'development') {
    apiURL = 'http://localhost:8080';
} else {
    apiURL = "https://weathertodo-production.up.railway.app";
}

export const baseURL = apiURL;

export const testData = {
    "lat": 40.7558,
    "lon": -73.9128,
    "timezone": "America/New_York",
    "timezone_offset": -14400,
    "current": {
    "dt": 1687807377,
    "sunrise": 1687771546,
    "sunset": 1687825858,
    "temp": 77.49,
    "feels_like": 78.55,
    "pressure": 1007,
    "humidity": 77,
    "dew_point": 69.71,
    "uvi": 3.94,
    "clouds": 75,
    "visibility": 10000,
    "wind_speed": 13.8,
    "wind_deg": 140,
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
    }
    ]
    },
    "minutely": [
    {
    "dt": 1687807380,
    "precipitation": 0
    },
    {
    "dt": 1687807440,
    "precipitation": 0
    },
    {
    "dt": 1687807500,
    "precipitation": 0
    },
    {
    "dt": 1687807560,
    "precipitation": 0
    },
    {
    "dt": 1687807620,
    "precipitation": 0
    },
    {
    "dt": 1687807680,
    "precipitation": 0
    },
    {
    "dt": 1687807740,
    "precipitation": 0
    },
    {
    "dt": 1687807800,
    "precipitation": 0
    },
    {
    "dt": 1687807860,
    "precipitation": 0
    },
    {
    "dt": 1687807920,
    "precipitation": 0
    },
    {
    "dt": 1687807980,
    "precipitation": 0
    },
    {
    "dt": 1687808040,
    "precipitation": 0
    },
    {
    "dt": 1687808100,
    "precipitation": 0
    },
    {
    "dt": 1687808160,
    "precipitation": 0
    },
    {
    "dt": 1687808220,
    "precipitation": 0
    },
    {
    "dt": 1687808280,
    "precipitation": 0
    },
    {
    "dt": 1687808340,
    "precipitation": 0
    },
    {
    "dt": 1687808400,
    "precipitation": 0
    },
    {
    "dt": 1687808460,
    "precipitation": 0
    },
    {
    "dt": 1687808520,
    "precipitation": 0
    },
    {
    "dt": 1687808580,
    "precipitation": 0
    },
    {
    "dt": 1687808640,
    "precipitation": 0
    },
    {
    "dt": 1687808700,
    "precipitation": 0
    },
    {
    "dt": 1687808760,
    "precipitation": 0
    },
    {
    "dt": 1687808820,
    "precipitation": 0
    },
    {
    "dt": 1687808880,
    "precipitation": 0
    },
    {
    "dt": 1687808940,
    "precipitation": 0
    },
    {
    "dt": 1687809000,
    "precipitation": 0
    },
    {
    "dt": 1687809060,
    "precipitation": 0
    },
    {
    "dt": 1687809120,
    "precipitation": 0
    },
    {
    "dt": 1687809180,
    "precipitation": 0
    },
    {
    "dt": 1687809240,
    "precipitation": 0
    },
    {
    "dt": 1687809300,
    "precipitation": 0
    },
    {
    "dt": 1687809360,
    "precipitation": 0
    },
    {
    "dt": 1687809420,
    "precipitation": 0
    },
    {
    "dt": 1687809480,
    "precipitation": 0
    },
    {
    "dt": 1687809540,
    "precipitation": 0
    },
    {
    "dt": 1687809600,
    "precipitation": 0
    },
    {
    "dt": 1687809660,
    "precipitation": 0
    },
    {
    "dt": 1687809720,
    "precipitation": 0
    },
    {
    "dt": 1687809780,
    "precipitation": 0
    },
    {
    "dt": 1687809840,
    "precipitation": 0
    },
    {
    "dt": 1687809900,
    "precipitation": 0
    },
    {
    "dt": 1687809960,
    "precipitation": 0
    },
    {
    "dt": 1687810020,
    "precipitation": 0
    },
    {
    "dt": 1687810080,
    "precipitation": 0
    },
    {
    "dt": 1687810140,
    "precipitation": 0
    },
    {
    "dt": 1687810200,
    "precipitation": 0
    },
    {
    "dt": 1687810260,
    "precipitation": 0
    },
    {
    "dt": 1687810320,
    "precipitation": 0
    },
    {
    "dt": 1687810380,
    "precipitation": 0
    },
    {
    "dt": 1687810440,
    "precipitation": 0
    },
    {
    "dt": 1687810500,
    "precipitation": 0
    },
    {
    "dt": 1687810560,
    "precipitation": 0
    },
    {
    "dt": 1687810620,
    "precipitation": 0
    },
    {
    "dt": 1687810680,
    "precipitation": 0
    },
    {
    "dt": 1687810740,
    "precipitation": 0
    },
    {
    "dt": 1687810800,
    "precipitation": 0
    },
    {
    "dt": 1687810860,
    "precipitation": 0
    },
    {
    "dt": 1687810920,
    "precipitation": 0
    },
    {
    "dt": 1687810980,
    "precipitation": 0
    }
    ],
    "hourly": [
    {
    "dt": 1687806000,
    "temp": 77.49,
    "feels_like": 78.55,
    "pressure": 1007,
    "humidity": 77,
    "dew_point": 69.71,
    "uvi": 3.94,
    "clouds": 75,
    "visibility": 10000,
    "wind_speed": 9.51,
    "wind_deg": 164,
    "wind_gust": 14.61,
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.81
    },
    {
    "dt": 1687809600,
    "temp": 77.34,
    "feels_like": 78.35,
    "pressure": 1007,
    "humidity": 76,
    "dew_point": 69.19,
    "uvi": 2.75,
    "clouds": 80,
    "visibility": 10000,
    "wind_speed": 10.31,
    "wind_deg": 159,
    "wind_gust": 16.08,
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.85
    },
    {
    "dt": 1687813200,
    "temp": 76.82,
    "feels_like": 77.77,
    "pressure": 1006,
    "humidity": 76,
    "dew_point": 68.68,
    "uvi": 1.6,
    "clouds": 85,
    "visibility": 10000,
    "wind_speed": 10.22,
    "wind_deg": 154,
    "wind_gust": 17.27,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.72
    },
    {
    "dt": 1687816800,
    "temp": 77.07,
    "feels_like": 77.95,
    "pressure": 1006,
    "humidity": 74,
    "dew_point": 68.14,
    "uvi": 0.9,
    "clouds": 90,
    "visibility": 10000,
    "wind_speed": 12.24,
    "wind_deg": 159,
    "wind_gust": 21.56,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.87
    },
    {
    "dt": 1687820400,
    "temp": 75.79,
    "feels_like": 76.69,
    "pressure": 1005,
    "humidity": 77,
    "dew_point": 68.07,
    "uvi": 0.29,
    "clouds": 95,
    "visibility": 10000,
    "wind_speed": 12.26,
    "wind_deg": 167,
    "wind_gust": 24.43,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "pop": 0.87,
    "rain": {
    "1h": 0.53
    }
    },
    {
    "dt": 1687824000,
    "temp": 73.71,
    "feels_like": 74.59,
    "pressure": 1005,
    "humidity": 81,
    "dew_point": 67.55,
    "uvi": 0,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 11.21,
    "wind_deg": 164,
    "wind_gust": 24.47,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "pop": 0.81,
    "rain": {
    "1h": 0.28
    }
    },
    {
    "dt": 1687827600,
    "temp": 72.27,
    "feels_like": 73.18,
    "pressure": 1005,
    "humidity": 85,
    "dew_point": 67.5,
    "uvi": 0,
    "clouds": 94,
    "visibility": 10000,
    "wind_speed": 11.41,
    "wind_deg": 156,
    "wind_gust": 23.13,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "pop": 0.64
    },
    {
    "dt": 1687831200,
    "temp": 70.84,
    "feels_like": 71.82,
    "pressure": 1005,
    "humidity": 89,
    "dew_point": 67.44,
    "uvi": 0,
    "clouds": 97,
    "visibility": 10000,
    "wind_speed": 11.39,
    "wind_deg": 163,
    "wind_gust": 25.3,
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10n"
    }
    ],
    "pop": 0.84,
    "rain": {
    "1h": 1.68
    }
    },
    {
    "dt": 1687834800,
    "temp": 69.91,
    "feels_like": 70.97,
    "pressure": 1006,
    "humidity": 93,
    "dew_point": 67.62,
    "uvi": 0,
    "clouds": 98,
    "visibility": 10000,
    "wind_speed": 11.79,
    "wind_deg": 175,
    "wind_gust": 25.43,
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10n"
    }
    ],
    "pop": 0.95,
    "rain": {
    "1h": 2.58
    }
    },
    {
    "dt": 1687838400,
    "temp": 69.98,
    "feels_like": 71.1,
    "pressure": 1005,
    "humidity": 94,
    "dew_point": 68.16,
    "uvi": 0,
    "clouds": 98,
    "visibility": 10000,
    "wind_speed": 10.63,
    "wind_deg": 178,
    "wind_gust": 19.55,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10n"
    }
    ],
    "pop": 1,
    "rain": {
    "1h": 0.56
    }
    },
    {
    "dt": 1687842000,
    "temp": 69.93,
    "feels_like": 71.04,
    "pressure": 1004,
    "humidity": 94,
    "dew_point": 68.05,
    "uvi": 0,
    "clouds": 99,
    "visibility": 10000,
    "wind_speed": 6.87,
    "wind_deg": 180,
    "wind_gust": 12.5,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10n"
    }
    ],
    "pop": 1,
    "rain": {
    "1h": 0.11
    }
    },
    {
    "dt": 1687845600,
    "temp": 69.48,
    "feels_like": 70.54,
    "pressure": 1004,
    "humidity": 94,
    "dew_point": 67.62,
    "uvi": 0,
    "clouds": 99,
    "visibility": 10000,
    "wind_speed": 4.36,
    "wind_deg": 124,
    "wind_gust": 6.26,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "pop": 0.8
    },
    {
    "dt": 1687849200,
    "temp": 69.17,
    "feels_like": 70.25,
    "pressure": 1004,
    "humidity": 95,
    "dew_point": 67.68,
    "uvi": 0,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 4.92,
    "wind_deg": 174,
    "wind_gust": 9.28,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "pop": 0.2
    },
    {
    "dt": 1687852800,
    "temp": 68.81,
    "feels_like": 69.85,
    "pressure": 1005,
    "humidity": 95,
    "dew_point": 67.33,
    "uvi": 0,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 6.71,
    "wind_deg": 195,
    "wind_gust": 14.12,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "pop": 0.4
    },
    {
    "dt": 1687856400,
    "temp": 69.21,
    "feels_like": 70.2,
    "pressure": 1004,
    "humidity": 93,
    "dew_point": 67.08,
    "uvi": 0,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 3.09,
    "wind_deg": 246,
    "wind_gust": 5.5,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "pop": 0.47
    },
    {
    "dt": 1687860000,
    "temp": 68.34,
    "feels_like": 69.24,
    "pressure": 1005,
    "humidity": 93,
    "dew_point": 66.24,
    "uvi": 0.02,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 5.5,
    "wind_deg": 230,
    "wind_gust": 11.03,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "pop": 0.7,
    "rain": {
    "1h": 0.38
    }
    },
    {
    "dt": 1687863600,
    "temp": 67.86,
    "feels_like": 68.72,
    "pressure": 1005,
    "humidity": 93,
    "dew_point": 65.8,
    "uvi": 0.14,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 3.91,
    "wind_deg": 216,
    "wind_gust": 7.11,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "pop": 0.79,
    "rain": {
    "1h": 0.8
    }
    },
    {
    "dt": 1687867200,
    "temp": 68.58,
    "feels_like": 69.37,
    "pressure": 1005,
    "humidity": 90,
    "dew_point": 65.5,
    "uvi": 0.41,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 4.14,
    "wind_deg": 207,
    "wind_gust": 8.37,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "pop": 0.87,
    "rain": {
    "1h": 0.1
    }
    },
    {
    "dt": 1687870800,
    "temp": 70.9,
    "feels_like": 71.64,
    "pressure": 1006,
    "humidity": 84,
    "dew_point": 65.5,
    "uvi": 2.29,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 6.82,
    "wind_deg": 206,
    "wind_gust": 11.74,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "pop": 0
    },
    {
    "dt": 1687874400,
    "temp": 73.08,
    "feels_like": 73.65,
    "pressure": 1006,
    "humidity": 76,
    "dew_point": 64.92,
    "uvi": 3.83,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 9.42,
    "wind_deg": 204,
    "wind_gust": 14.94,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "pop": 0
    },
    {
    "dt": 1687878000,
    "temp": 75.22,
    "feels_like": 75.69,
    "pressure": 1006,
    "humidity": 69,
    "dew_point": 64.33,
    "uvi": 5.36,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 11.01,
    "wind_deg": 197,
    "wind_gust": 15.52,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.03
    },
    {
    "dt": 1687881600,
    "temp": 76.44,
    "feels_like": 76.93,
    "pressure": 1006,
    "humidity": 67,
    "dew_point": 64.47,
    "uvi": 5.44,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 10.69,
    "wind_deg": 186,
    "wind_gust": 14.34,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.03
    },
    {
    "dt": 1687885200,
    "temp": 76.91,
    "feels_like": 77.45,
    "pressure": 1006,
    "humidity": 67,
    "dew_point": 64.99,
    "uvi": 5.75,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 11.05,
    "wind_deg": 177,
    "wind_gust": 13.96,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "pop": 0
    },
    {
    "dt": 1687888800,
    "temp": 77.79,
    "feels_like": 78.33,
    "pressure": 1005,
    "humidity": 65,
    "dew_point": 65.26,
    "uvi": 5.35,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 10.76,
    "wind_deg": 170,
    "wind_gust": 12.86,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.08
    },
    {
    "dt": 1687892400,
    "temp": 77.95,
    "feels_like": 78.51,
    "pressure": 1005,
    "humidity": 65,
    "dew_point": 65.3,
    "uvi": 5.19,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 11.43,
    "wind_deg": 163,
    "wind_gust": 13.27,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.2
    },
    {
    "dt": 1687896000,
    "temp": 78.12,
    "feels_like": 78.67,
    "pressure": 1005,
    "humidity": 65,
    "dew_point": 65.41,
    "uvi": 3.64,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 11.68,
    "wind_deg": 158,
    "wind_gust": 14.18,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "pop": 0.38,
    "rain": {
    "1h": 0.14
    }
    },
    {
    "dt": 1687899600,
    "temp": 77.67,
    "feels_like": 78.28,
    "pressure": 1004,
    "humidity": 67,
    "dew_point": 65.77,
    "uvi": 2.12,
    "clouds": 99,
    "visibility": 10000,
    "wind_speed": 12.01,
    "wind_deg": 155,
    "wind_gust": 13.62,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "pop": 0.53,
    "rain": {
    "1h": 0.19
    }
    },
    {
    "dt": 1687903200,
    "temp": 74.52,
    "feels_like": 75.29,
    "pressure": 1005,
    "humidity": 77,
    "dew_point": 66.81,
    "uvi": 0.87,
    "clouds": 77,
    "visibility": 10000,
    "wind_speed": 12.88,
    "wind_deg": 168,
    "wind_gust": 18.9,
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10d"
    }
    ],
    "pop": 0.57,
    "rain": {
    "1h": 1.93
    }
    },
    {
    "dt": 1687906800,
    "temp": 72.45,
    "feels_like": 73.35,
    "pressure": 1005,
    "humidity": 84,
    "dew_point": 67.12,
    "uvi": 0.29,
    "clouds": 76,
    "visibility": 10000,
    "wind_speed": 11.1,
    "wind_deg": 168,
    "wind_gust": 17.98,
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10d"
    }
    ],
    "pop": 0.69,
    "rain": {
    "1h": 1.43
    }
    },
    {
    "dt": 1687910400,
    "temp": 72.18,
    "feels_like": 73.09,
    "pressure": 1006,
    "humidity": 85,
    "dew_point": 67.42,
    "uvi": 0,
    "clouds": 80,
    "visibility": 10000,
    "wind_speed": 8.7,
    "wind_deg": 158,
    "wind_gust": 13.02,
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10d"
    }
    ],
    "pop": 0.71,
    "rain": {
    "1h": 1.8
    }
    },
    {
    "dt": 1687914000,
    "temp": 71.1,
    "feels_like": 72.09,
    "pressure": 1006,
    "humidity": 89,
    "dew_point": 67.5,
    "uvi": 0,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 7.83,
    "wind_deg": 162,
    "wind_gust": 12.73,
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10n"
    }
    ],
    "pop": 0.88,
    "rain": {
    "1h": 1.58
    }
    },
    {
    "dt": 1687917600,
    "temp": 70.2,
    "feels_like": 71.24,
    "pressure": 1006,
    "humidity": 92,
    "dew_point": 67.59,
    "uvi": 0,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 7.52,
    "wind_deg": 164,
    "wind_gust": 12.1,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10n"
    }
    ],
    "pop": 0.88,
    "rain": {
    "1h": 0.35
    }
    },
    {
    "dt": 1687921200,
    "temp": 70.32,
    "feels_like": 71.33,
    "pressure": 1006,
    "humidity": 91,
    "dew_point": 67.37,
    "uvi": 0,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 5.93,
    "wind_deg": 174,
    "wind_gust": 10.71,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10n"
    }
    ],
    "pop": 0.88,
    "rain": {
    "1h": 0.32
    }
    },
    {
    "dt": 1687924800,
    "temp": 70.03,
    "feels_like": 70.97,
    "pressure": 1006,
    "humidity": 90,
    "dew_point": 66.99,
    "uvi": 0,
    "clouds": 98,
    "visibility": 10000,
    "wind_speed": 4.7,
    "wind_deg": 192,
    "wind_gust": 9.71,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10n"
    }
    ],
    "pop": 0.96,
    "rain": {
    "1h": 0.1
    }
    },
    {
    "dt": 1687928400,
    "temp": 69.85,
    "feels_like": 70.72,
    "pressure": 1005,
    "humidity": 89,
    "dew_point": 66.47,
    "uvi": 0,
    "clouds": 95,
    "visibility": 10000,
    "wind_speed": 3.83,
    "wind_deg": 231,
    "wind_gust": 9.6,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "pop": 0.76
    },
    {
    "dt": 1687932000,
    "temp": 69.8,
    "feels_like": 70.61,
    "pressure": 1005,
    "humidity": 88,
    "dew_point": 66.15,
    "uvi": 0,
    "clouds": 96,
    "visibility": 10000,
    "wind_speed": 2.82,
    "wind_deg": 264,
    "wind_gust": 4.92,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "pop": 0.76
    },
    {
    "dt": 1687935600,
    "temp": 69.26,
    "feels_like": 70.02,
    "pressure": 1005,
    "humidity": 88,
    "dew_point": 65.66,
    "uvi": 0,
    "clouds": 98,
    "visibility": 10000,
    "wind_speed": 3.36,
    "wind_deg": 258,
    "wind_gust": 4.18,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "pop": 0.31
    },
    {
    "dt": 1687939200,
    "temp": 68.81,
    "feels_like": 69.57,
    "pressure": 1005,
    "humidity": 89,
    "dew_point": 65.25,
    "uvi": 0,
    "clouds": 99,
    "visibility": 10000,
    "wind_speed": 4.21,
    "wind_deg": 253,
    "wind_gust": 6.82,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "pop": 0.27
    },
    {
    "dt": 1687942800,
    "temp": 68.09,
    "feels_like": 68.77,
    "pressure": 1006,
    "humidity": 89,
    "dew_point": 64.76,
    "uvi": 0,
    "clouds": 99,
    "visibility": 10000,
    "wind_speed": 4.56,
    "wind_deg": 254,
    "wind_gust": 9.17,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "pop": 0.23
    },
    {
    "dt": 1687946400,
    "temp": 67.78,
    "feels_like": 68.45,
    "pressure": 1006,
    "humidity": 89,
    "dew_point": 64.4,
    "uvi": 0.09,
    "clouds": 98,
    "visibility": 10000,
    "wind_speed": 4.38,
    "wind_deg": 247,
    "wind_gust": 8.95,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.19
    },
    {
    "dt": 1687950000,
    "temp": 68.79,
    "feels_like": 69.31,
    "pressure": 1006,
    "humidity": 84,
    "dew_point": 63.72,
    "uvi": 0.46,
    "clouds": 97,
    "visibility": 10000,
    "wind_speed": 5.3,
    "wind_deg": 255,
    "wind_gust": 9.24,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.19
    },
    {
    "dt": 1687953600,
    "temp": 70.81,
    "feels_like": 71.17,
    "pressure": 1007,
    "humidity": 76,
    "dew_point": 62.82,
    "uvi": 1.34,
    "clouds": 91,
    "visibility": 10000,
    "wind_speed": 5.5,
    "wind_deg": 261,
    "wind_gust": 7.96,
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.19
    },
    {
    "dt": 1687957200,
    "temp": 73.11,
    "feels_like": 73.33,
    "pressure": 1008,
    "humidity": 68,
    "dew_point": 62.13,
    "uvi": 2.83,
    "clouds": 49,
    "visibility": 10000,
    "wind_speed": 6.15,
    "wind_deg": 256,
    "wind_gust": 8.55,
    "weather": [
    {
    "id": 802,
    "main": "Clouds",
    "description": "scattered clouds",
    "icon": "03d"
    }
    ],
    "pop": 0
    },
    {
    "dt": 1687960800,
    "temp": 75.97,
    "feels_like": 76.1,
    "pressure": 1008,
    "humidity": 60,
    "dew_point": 61.16,
    "uvi": 4.71,
    "clouds": 61,
    "visibility": 10000,
    "wind_speed": 6.82,
    "wind_deg": 244,
    "wind_gust": 8.95,
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
    }
    ],
    "pop": 0
    },
    {
    "dt": 1687964400,
    "temp": 78.24,
    "feels_like": 78.35,
    "pressure": 1008,
    "humidity": 55,
    "dew_point": 60.66,
    "uvi": 6.59,
    "clouds": 67,
    "visibility": 10000,
    "wind_speed": 7.85,
    "wind_deg": 228,
    "wind_gust": 9.64,
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.03
    },
    {
    "dt": 1687968000,
    "temp": 80.24,
    "feels_like": 81.12,
    "pressure": 1007,
    "humidity": 51,
    "dew_point": 60.4,
    "uvi": 6.08,
    "clouds": 59,
    "visibility": 10000,
    "wind_speed": 9.19,
    "wind_deg": 216,
    "wind_gust": 10.27,
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.09
    },
    {
    "dt": 1687971600,
    "temp": 81.54,
    "feels_like": 82.15,
    "pressure": 1007,
    "humidity": 49,
    "dew_point": 60.39,
    "uvi": 6.43,
    "clouds": 54,
    "visibility": 10000,
    "wind_speed": 10.96,
    "wind_deg": 218,
    "wind_gust": 12.1,
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
    }
    ],
    "pop": 0.33
    },
    {
    "dt": 1687975200,
    "temp": 81.82,
    "feels_like": 82.44,
    "pressure": 1007,
    "humidity": 49,
    "dew_point": 60.8,
    "uvi": 5.98,
    "clouds": 56,
    "visibility": 10000,
    "wind_speed": 10.69,
    "wind_deg": 227,
    "wind_gust": 12.3,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "pop": 0.45,
    "rain": {
    "1h": 0.13
    }
    }
    ],
    "daily": [
    {
    "dt": 1687795200,
    "sunrise": 1687771546,
    "sunset": 1687825858,
    "moonrise": 1687800120,
    "moonset": 1687755420,
    "moon_phase": 0.25,
    "summary": "Expect a day of partly cloudy with rain",
    "temp": {
    "day": 77.2,
    "min": 69.53,
    "max": 77.49,
    "night": 69.91,
    "eve": 77.07,
    "morn": 69.53
    },
    "feels_like": {
    "day": 78.04,
    "night": 70.97,
    "eve": 77.95,
    "morn": 70.56
    },
    "pressure": 1008,
    "humidity": 73,
    "dew_point": 67.87,
    "wind_speed": 12.26,
    "wind_deg": 167,
    "wind_gust": 25.43,
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10d"
    }
    ],
    "clouds": 90,
    "pop": 1,
    "rain": 8.67,
    "uvi": 6.01
    },
    {
    "dt": 1687881600,
    "sunrise": 1687857968,
    "sunset": 1687912260,
    "moonrise": 1687890300,
    "moonset": 1687843080,
    "moon_phase": 0.29,
    "summary": "Expect a day of partly cloudy with rain",
    "temp": {
    "day": 76.44,
    "min": 67.86,
    "max": 78.12,
    "night": 70.32,
    "eve": 74.52,
    "morn": 68.34
    },
    "feels_like": {
    "day": 76.93,
    "night": 71.33,
    "eve": 75.29,
    "morn": 69.24
    },
    "pressure": 1006,
    "humidity": 67,
    "dew_point": 64.47,
    "wind_speed": 12.88,
    "wind_deg": 168,
    "wind_gust": 19.55,
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10d"
    }
    ],
    "clouds": 100,
    "pop": 1,
    "rain": 9.69,
    "uvi": 5.75
    },
    {
    "dt": 1687968000,
    "sunrise": 1687944391,
    "sunset": 1687998660,
    "moonrise": 1687980720,
    "moonset": 1687930740,
    "moon_phase": 0.33,
    "summary": "Expect a day of partly cloudy with rain",
    "temp": {
    "day": 80.24,
    "min": 67.14,
    "max": 81.82,
    "night": 67.14,
    "eve": 76.71,
    "morn": 67.78
    },
    "feels_like": {
    "day": 81.12,
    "night": 67.21,
    "eve": 77.29,
    "morn": 68.45
    },
    "pressure": 1007,
    "humidity": 51,
    "dew_point": 60.4,
    "wind_speed": 10.96,
    "wind_deg": 218,
    "wind_gust": 17.18,
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10d"
    }
    ],
    "clouds": 59,
    "pop": 0.96,
    "rain": 6.47,
    "uvi": 6.59
    },
    {
    "dt": 1688054400,
    "sunrise": 1688030816,
    "sunset": 1688085058,
    "moonrise": 1688071320,
    "moonset": 1688018640,
    "moon_phase": 0.36,
    "summary": "Expect a day of partly cloudy with clear spells",
    "temp": {
    "day": 77.18,
    "min": 65.1,
    "max": 83.03,
    "night": 72.97,
    "eve": 83.03,
    "morn": 65.17
    },
    "feels_like": {
    "day": 77.09,
    "night": 73.2,
    "eve": 82.78,
    "morn": 65.1
    },
    "pressure": 1013,
    "humidity": 53,
    "dew_point": 58.62,
    "wind_speed": 7.7,
    "wind_deg": 307,
    "wind_gust": 13.85,
    "weather": [
    {
    "id": 801,
    "main": "Clouds",
    "description": "few clouds",
    "icon": "02d"
    }
    ],
    "clouds": 14,
    "pop": 0.27,
    "uvi": 5.98
    },
    {
    "dt": 1688140800,
    "sunrise": 1688117242,
    "sunset": 1688171454,
    "moonrise": 1688162160,
    "moonset": 1688106840,
    "moon_phase": 0.39,
    "summary": "You can expect clear sky in the morning, with partly cloudy in the afternoon",
    "temp": {
    "day": 82.02,
    "min": 69.89,
    "max": 85.46,
    "night": 74.19,
    "eve": 82.38,
    "morn": 69.89
    },
    "feels_like": {
    "day": 82.36,
    "night": 74.41,
    "eve": 82.58,
    "morn": 70.2
    },
    "pressure": 1016,
    "humidity": 47,
    "dew_point": 59.76,
    "wind_speed": 13.49,
    "wind_deg": 168,
    "wind_gust": 21.7,
    "weather": [
    {
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01d"
    }
    ],
    "clouds": 3,
    "pop": 0,
    "uvi": 8.81
    },
    {
    "dt": 1688227200,
    "sunrise": 1688203670,
    "sunset": 1688257848,
    "moonrise": 1688253060,
    "moonset": 1688195580,
    "moon_phase": 0.43,
    "summary": "Expect a day of partly cloudy with rain",
    "temp": {
    "day": 71.94,
    "min": 66.79,
    "max": 72.25,
    "night": 68.97,
    "eve": 66.79,
    "morn": 71.02
    },
    "feels_like": {
    "day": 72.32,
    "night": 69.75,
    "eve": 67.44,
    "morn": 71.4
    },
    "pressure": 1016,
    "humidity": 74,
    "dew_point": 63,
    "wind_speed": 11.1,
    "wind_deg": 142,
    "wind_gust": 21.94,
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10d"
    }
    ],
    "clouds": 100,
    "pop": 0.99,
    "rain": 9.67,
    "uvi": 0.75
    },
    {
    "dt": 1688313600,
    "sunrise": 1688290099,
    "sunset": 1688344240,
    "moonrise": 1688343660,
    "moonset": 1688284980,
    "moon_phase": 0.47,
    "summary": "There will be partly cloudy until morning, then rain",
    "temp": {
    "day": 72.57,
    "min": 69.57,
    "max": 76.41,
    "night": 73.47,
    "eve": 76.41,
    "morn": 69.8
    },
    "feels_like": {
    "day": 73.94,
    "night": 74.75,
    "eve": 77.7,
    "morn": 70.9
    },
    "pressure": 1010,
    "humidity": 94,
    "dew_point": 70.74,
    "wind_speed": 12.26,
    "wind_deg": 160,
    "wind_gust": 26.64,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "clouds": 100,
    "pop": 0.97,
    "rain": 5.53,
    "uvi": 1
    },
    {
    "dt": 1688400000,
    "sunrise": 1688376530,
    "sunset": 1688430631,
    "moonrise": 1688433720,
    "moonset": 1688375160,
    "moon_phase": 0.5,
    "summary": "Expect a day of partly cloudy with rain",
    "temp": {
    "day": 78.3,
    "min": 70.18,
    "max": 87.64,
    "night": 78.91,
    "eve": 87.64,
    "morn": 70.18
    },
    "feels_like": {
    "day": 78.37,
    "night": 78.91,
    "eve": 87.69,
    "morn": 71.31
    },
    "pressure": 1011,
    "humidity": 54,
    "dew_point": 60.06,
    "wind_speed": 11.63,
    "wind_deg": 208,
    "wind_gust": 23.22,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "clouds": 100,
    "pop": 0.42,
    "rain": 0.11,
    "uvi": 1
    }
    ]
    }