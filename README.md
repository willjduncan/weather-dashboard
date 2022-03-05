# weather-dashboard
Challenge 6

## Description

AS A traveler

I WANT to see the weather outlook for multiple cities

SO THAT I can plan a trip accordingly

This assignment is aimed at combining my JavaScript skills and my ability to access and wield server-side APIs. This challenge requires the ability to successfully seek and interpret documentation of a hitherto un-encountered API, thus making it as much a challenge of googling and learning as it is one of HTML and Javascript. 

The program, once completed, should be able to give me information on the current and upcoming weather of whatever city I may ask of it. It should then save that fetched data in local storage to be retrieved whenever the user wants. 

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

I began with adding and arranging the necessary files and branches before adding some basic scaffolding and linking them both to each other and the main third party client-side API's I planned to use: JQuery, Moment.js, and Bootstrap. Once I had the main items in place, and using the mock-up as a template, I added the necessary HTML elements, including the empty divs I expected to use later, and styled them to look good. 

After I had the HTML and CSS the way I wanted it, I turned my attention to JavaScript. Before I could do anything, I needed to find out how to fetch from Open Weather. Reading the documentation, I soon discovered that I needed to in fact get my own api code and also do two fetches: one to get the longitude and latitude of the city. Then, using those coordinates, I'd fetch the actual weather data. 

Using Charlotte as a placeholder, I then focused on displaying the data, and once that was complete, connecting the search button to the fetch in order to plug in any city. Although I got that to work, a second city input would just append itself to whatever was already there, so I had to figure out how to delete everything within the container before it was repopulated. 

Lastly, I had to find a way to both save and re-display city information. I puzzled over this for a while, unsure how to save every bit of information I had gotten into some kind of logical array that then could be re-displayed with ease. Finally I realized that, wait a minute, everything I need and more (in case I ever want to display more) is already packaged in a well-organized and logical way! Why don't I just save all the data that I fetch for a city, and use the city name as the key? And from there, it was magic. 

Now, when the user goes on, they can look up any city and return to it whenever they so choose. 

## Installation

My repository on GitHub is named Work-Scheduler. The link to this repository is below.

[https://github.com/willjduncan/weather-dashboard.git](https://github.com/willjduncan/weather-dashboard.git)


The link to the live website is below: 

[https://willjduncan.github.io/weather-dashboard/](https://willjduncan.github.io/weather-dashboard/)


## Usage

Screenshots are shown of the HTML and JavaScript pages, all built from scratch. CSS isn't included, since most styling was accomplished using Bootstrap. 

![screenshot of HTML](/assets/images/screenshot-html.png)

![screenshot of JavaScript](/assets/images/screenshot-js.png)


Screenshots are also provided of the mockup and the completed website.  

![screenshot of the mockup](/assets/images/mockup.png)
![screenshot of live website](/assets/images/screenshot-active.png) 

## Credits

No classmates or instructors were used in the making of this website. The coding boot camp Professional README Guide found at https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide was used as a template for this README. The license was picked from [https://choosealicense.com/](https://choosealicense.com/), as suggested by the README Guide aforementioned. The WHEN/THEN section of this README was taken directly from the homework assignment Acceptance Criteria. The Taskmaster Pro project of Module 5, the git-it-done project of Module 6, and the in-class assignments of week 6 were used as examples. Stack Overflow, MDN Web Docs, W3, and Google were critical to my success. 

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