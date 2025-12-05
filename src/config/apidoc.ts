// Using openapi.json
// import swaggerDocument from "../openapi.json";
// export { swaggerDocument };

// Using openapi.yaml
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as yaml from "js-yaml";
import * as path from "path";

// declare js syntax from ts
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// path ke file YAML
const yamlPath = path.resolve(__dirname, "../openapi.yaml");

const fileContents = fs.readFileSync(yamlPath, "utf8");
let swaggerDocument: any = yaml.load(fileContents);

export { swaggerDocument };
