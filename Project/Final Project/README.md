# Bootcamp Projects Announcement

Hello, everyone!

We are excited to announce the projects you will be working on to practice the skills you've learned in our frontend web development class. Please complete these projects within a month. If you encounter any challenges, don't hesitate to ask for help in the group. We've also provided links to free YouTube videos to help guide you through each project.

---

## Project 1: Personal Portfolio Website

### Objective:
Create a personal portfolio website that showcases your skills, projects, and a little about yourself. This project will allow you to practice HTML structure, CSS styling, and basic JavaScript interactivity.

### Requirements:

1. **Home Page:**
   - A welcoming introduction about yourself.
   - A navigation menu linking to different sections or pages (About Me, Projects, Contact).
   - A footer with your contact information and social media links.

2. **About Me Section/Page:**
   - A brief biography, including your interests, background, and what you are currently learning or working on.
   - A photo of yourself.

3. **Projects Section/Page:**
   - A showcase of at least three projects you've worked on. For each project, include:
     - Project title
     - A brief description
     - A screenshot or image
     - A link to view the project (if available)

4. **Contact Section/Page:**
   - A simple contact form where users can enter their name, email, and message.
   - A button to submit the form (functionality can be simulated with JavaScript).

5. **Styling:**
   - Use CSS to style the website. Make it visually appealing with consistent colors, fonts, and layout.
   - Ensure the website is responsive and looks good on different devices (e.g., desktops, tablets, phones).

6. **JavaScript:**
   - Add interactivity to the site. Examples include:
     - A form validation script to ensure users enter the required fields.
     - A dynamic navigation menu that highlights the current section.
     - Smooth scrolling to sections when navigation links are clicked.
   - Use promises (then/async-await) for any asynchronous operations.

7. **Additional Features (Optional):**
   - A light/dark mode toggle.
   - An image carousel or gallery for the Projects section.
   - Animation effects for elements appearing on the screen.

**YouTube Reference:** [Personal Portfolio Website Tutorial](https://www.youtube.com/watch?v=xV7S8BhIeBo)

### Submission:
Submit your project as a ZIP file containing all the necessary HTML, CSS, and JavaScript files, along with any assets like images. Optionally, you can also host the project on a platform like GitHub Pages and submit the link.

---

## Project 2: Interactive Dashboard for a City Weather and News Portal

### Objective:
Create an interactive dashboard that provides real-time weather updates and the latest news for a selected city. This project will allow students to demonstrate their ability to work with APIs, handle user interactions, and design a clean, responsive interface.

### Requirements:

1. **Home Page:**
   - A header with the portal's name and navigation links.
   - A form allowing users to enter a city name to get weather and news updates.
   - A section displaying a default city's weather and news as the landing view.

2. **Weather Section:**
   - Display current weather conditions for the selected city, including temperature, humidity, wind speed, and weather description.
   - An icon representing the weather conditions (sunny, cloudy, rainy, etc.).
   - A 5-day weather forecast with high and low temperatures.

3. **News Section:**
   - A list of the latest news articles related to the selected city, including headlines, short summaries, and publication dates.
   - Links to the full articles (if available).

4. **Additional Features:**
   - A "Favorites" feature allowing users to save cities for quick access.
   - A refresh button to update weather and news data.
   - A responsive design that ensures the dashboard looks good on various devices.

5. **Styling:**
   - Use CSS and/or a framework like Bootstrap to create a visually appealing and user-friendly interface.
   - Ensure consistent use of colors, fonts, and spacing.
   - Incorporate icons and images to enhance the visual appeal.

6. **JavaScript Features:**
   - Fetch weather data from a public API (like OpenWeatherMap) and news data from a news API.
   - Use asynchronous JavaScript (fetch or Axios) to retrieve and display data without reloading the page.
   - Implement form validation to ensure a valid city name is entered.
   - Add interactivity, such as clickable elements for navigation and smooth transitions.
   - Use promises (then/async-await) for fetching data.

7. **Advanced Features (Optional):**
   - Implement a theme toggle (light/dark mode).
   - Include additional data, such as air quality or UV index.
   - Allow users to set the default city on page load.
   - Implement a loading screen while fetching data.

**YouTube Reference:** [City Weather and News Dashboard Tutorial](https://www.youtube.com/watch?v=6trGQWzg2AI)

### Submission:
Submit your project as a ZIP file with all necessary files and assets, or host it on a platform like GitHub Pages and submit the link.

**Note:** Please think of the YouTube videos as a starting point and not as a template to follow exactly. Use them to understand the concepts and then apply your creativity and skills to build unique projects.

Good luck, and we look forward to seeing your fantastic work!

---

### APIs for the Interactive Dashboard for a City Weather and News Portal

**1. OpenWeatherMap API**  
**Purpose:** To fetch weather data for a specified city.
- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
- **Sign Up:** You need to create an account on [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) to get an API key.
- **Data Provided:**
  - Current weather conditions (temperature, humidity, wind speed, etc.)
  - Weather descriptions (clear, cloudy, etc.)
  - Weather icons
  - 5-day weather forecast (if using the `forecast` endpoint)

**Example Request:**
```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY`)
  .then(response => response.json())
  .then(data => console.log(data));
```

**2. News API**
**Purpose:** To fetch news articles related to a specific city or topic.

- **Endpoint:** `https://newsapi.org/v2/everything?q={query}&apiKey={API key}`
- **Sign Up:** You need to create an account on News API to get an API key.
- **Data Provided:**
   - Latest news articles
   - Headlines, descriptions, publication dates
   - Links to the full articles

**Example Request:**
```javascript
fetch(`https://newsapi.org/v2/everything?q=London&apiKey=YOUR_API_KEY`)
  .then(response => response.json())
  .then(data => console.log(data));
```

### Using the APIs:

#### Weather Data:
- Retrieve and display the current weather and a 5-day forecast for the selected city.
- Display additional information like temperature, humidity, wind speed, etc.

#### News Data:
- Fetch and display the latest news articles related to the selected city.
- Include headlines, short summaries, and publication dates, with links to the full articles.

### Important Notes:
- Ensure you handle errors gracefully, such as when the API returns an error or the city name is not found.
- Respect the usage limits of the APIs, especially if using free plans. Implement mechanisms to avoid exceeding the request limits.
