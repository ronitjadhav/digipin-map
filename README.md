# DIGIPIN Map

This Next.js application allows users to click on a map and get the respective DIGIPIN for the selected location. DIGIPIN is a geo-coded addressing system in India, providing a unique 10-digit alphanumeric code derived from latitude and longitude coordinates.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Features

- Interactive map for selecting locations
- Generate DIGIPIN from latitude and longitude
- Convert DIGIPIN back to latitude and longitude
- Responsive design with dark mode support

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/digipin-map-viewer.git
   cd digipin-map

2. Install the dependencies:

    ```sh
    npm install

3. Start the development server:

    ```sh
    npm run dev
   
4. Open the application in your browser:

    ```sh
    http://localhost:3000

## Usage

Once the application is running, you can use it as follows:

1.	Open the application in your browser.
2. Click on the map to select a location.
3.	The respective DIGIPIN for the selected location will be displayed.

## Implementing DIGIPIN in Your Project

You can easily integrate DIGIPIN into your project by installing the DIGIPIN NPM package. 
This npm package allows you to convert latitude and longitude coordinates into a DIGIPIN code and vice versa.

To install the DIGIPIN package, run the following command:

```sh
npm install digipin
