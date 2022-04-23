import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import Papa from "papaparse";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

writeFileSync(
  join(__dirname, "./dist/us-car-data.json"),
  JSON.stringify(
    readdirSync(join(__dirname, "./source-data"))
      .filter((filename) => filename.slice(-4) === ".csv")
      .map((filename) => {
        return readFileSync(join(__dirname, "./source-data", filename), {
          encoding: "utf-8",
        });
      })
      .map((csvString) => {
        const result = Papa.parse(csvString, { header: true });
        return result.data;
      })
      .flat()
      .map((car) => {
        return {
          ...car,
          body_styles: car.body_styles ? JSON.parse(car.body_styles) : [],
        };
      }),
    null,
    2
  )
);

console.log("JSON data written to ./dist/us-car-data.json");
