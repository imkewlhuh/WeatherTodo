# WeatherTodo

Welcome to WeatherTodo! A simple web application with a weather component and a to-do list component. Neat features and fully responsive.

Weather Component:
Makes API calls to "https://openweathermap.org/api" and shows real time data for weather in New York City. Exact location used for api call is in the Northwest Queens area.
Modeled after the iPhone Weather app, this component shows the current temperature, weather, and highest + lowest temperature for the day. Also shows an hourly forecast for the next 25 hours and daily forecast for the next 8 days. Component also has a dynamic background that changes depending on the current weather (ex: Sunny, Cloudy, Rain, Night).

To-do list Component:
Makes API calls to a MySQL database with full CRUD functionality. Anonymous users can create, edit, and delete tasks that will render in the to-do list. Simply click the corresponding button to add(+), edit(pencil), and delete(trash). Add and edit will bring up a text field where the same button can now be pressed again to confirm input.
Tasks can also be marked "complete" by clicking the checkbox. This will move the task to the bottom of the list, add strike-through font, and slightly grey it out. Completed tasks can still be reverted to "incomplete", edited, or deleted.

Thank you for using my application :)
