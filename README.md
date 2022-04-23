# US Car Data JSON

[US Car Models Data by Abhilash
Reddy](https://github.com/abhionlyone/us-car-models-data), but in JSON format.

This repository contains a function that automatically converts the source CSV
files into JSON.

## Usage

### Using the JSON file

Just copy `./dist/us-car-data.json`

### Building the JSON file yourself

Clone this repository

```bash
git clone https://github.com/travishorn/us-car-data-json
```

Change into the directory

```bash
cd us-car-data-json
```

Install dependencies

```bash
npm install
```

Copy CSV files from https://github.com/abhionlyone/us-car-models-data into
`./source-data`.

Build the JSON file

```bash
npm run build
```

See result at `./dist/us-car-data.json`

## License

Car data licensed under Creative Commons Attribution 4.0 International Public
License

Transformation code licensed under The MIT License (MIT) Copyright © 2022 Travis
Horn
