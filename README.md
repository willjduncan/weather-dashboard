# weather-dashboard
Challenge 6

## Description

AS A traveler

I WANT to see the weather outlook for multiple cities

SO THAT I can plan a trip accordingly

<!-- This assignment is aimed at combining my JavaScript skills with all the new Third-Party APIs I've been introduced to over the past week, including JQuery, Moment.js, and Bootstrap. With their aid, I should create an interactive daily planner that reacts to time, clicking, and saving. By completing the assignment I will gain greater familiarity with using different libraries, searching documentation, and writing code with different grammar. 

The planner, once completed, can help keep the user organized and on top of their daily activities and responsibilities. The planner will be arranged so that it should be able to include additional hours at little extra coding cost.  -->

My job is to build the website so that:

GIVEN a weather dashboard with form inputs

WHEN I search for a city

THEN I am presented with current and future conditions for that city and that city is added to the search history

WHEN I view current weather conditions for that city

THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

WHEN I view the UV index

THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

WHEN I view future weather conditions for that city

THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

WHEN I click on a city in the search history

THEN I am again presented with current and future conditions for that city

<!-- I began with looking over the code already in place, familiarizing myself with the classes and double-checking API sourcing. Once done, I started by adding all the HTML divs I planned to use, and began styling them, using the first two rows to test my code before applying it further down the page. 

Once done with the styling and blocking, I turned my attention to javaScript. Using Taskmaster Pro as an example, I added the time at the top of the page and set it to update every 30 seconds. I then set the middle column up to turn into input values on click. 

After that, I turned my attentions toward saving the input. I had trouble with this, but ultimately found a solution by creating an index id for each hour. That was the simplest, albeit sloppiest, way to get my code to find each p element, save its value into an array, and spit it back out in the right place. 

From there, I focused on getting the colors to change based on time. Again, for the sake of success, I relied on my index id in order to assign a time. I activated all of the save buttons and refactored. 

Now, when a user goes on, they will be notified of the time with a constantly adjusting clock. By clicking the middle column they can type a task at whatever time slot they desire between 9 and 5 and by pressing the button of the right, they can save their log. In addition, the colors adjust to alert the user what parts of the schedule are over, in the future, or currently occurring.  -->

<!-- ## Installation

My repository on GitHub is named Work-Scheduler. The link to this repository is below.

[git@github.com:willjduncan/Work-Scheduler.git](git@github.com:willjduncan/Work-Scheduler.git)


The link to the live website is below: 

[hhttps://willjduncan.github.io/Work-Scheduler/](https://willjduncan.github.io/Work-Scheduler/) -->


<!-- ## Usage

Screenshots are shown of the HTML, CSS, and JavaScript pages, all built from scratch. 

![screenshot of HTML](/assets/images/screenshot-html.png)

![screenshot of CSS](/assets/images/screenshot-css.png)

![screenshot of JavaScript](/assets/images/screenshot-js.png)


Screenshots are also provided of the completed website. Note the time and different colors.  

![screenshot of live website](/assets/images/screenshot-active.png) -->

<!-- ## Credits

No classmates or instructors were used in the making of this website. The coding boot camp Professional README Guide found at https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide was used as a template for this README. The license was picked from [https://choosealicense.com/](https://choosealicense.com/), as suggested by the README Guide aforementioned. The WHEN/THEN section of this README was taken directly from the homework assignment Acceptance Criteria. The Taskmaster Pro project of Module 5 and the in-class assignments of week 5 were both used as examples. Stack Overflow, MDN Web Docs, W3, and Google were critical to my success.  -->

## License

MIT License

Copyright (c) [2022] [Will Duncan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.