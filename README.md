# weekly_challenges
Weekly Challenges given from Brainster Academy that test and improve my knowledge in the area of HTML, CSS and JavaScript
You will find a portfolio of projects starting from simple websites using basic CSS, SASS, Bootstrap Framework to more complex dynamic web applications using JavaScript.


2. Challenge with Async JS 
#  Website store for bikes
A simple JavaScript web app that displays a list of bikes and allows users to filter them by **gender** and **brand** using interactive buttons. Each filter shows a **badge** with the count of matching bikes. 

## Features 
- Filter bikes by gender (e.g. Male/Female)
- Filter bikes by brand
- Badge count updates dinamically and on page load
- Highlights selected filter with custom styling
- Fully responsive and interactive UI

## Tech Stack 
- HTML5
- CSS3 with Tailwind Framework as support
- JavaScript (vanilla)

## How it works
- Bike data is loaded from a JSON file using `fetch()`
- Buttons are generated or targeted via DOM selectors
- Each filter compares normalized valus (e.g. `LE GRAND BIKES` -> `le-grand-bikes` for accurate matching
- The `.filter.clicked` class adds visual feedback and updates badges styles

## Usage 
1. Clone the repository:
   ```bash
   git clone https://github.com/ibogoeska/weekly_challenges/Challenge-ASYNC-JS
 
