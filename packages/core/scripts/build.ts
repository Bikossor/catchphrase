import { rmSync } from "fs";
import { execSync } from "child_process";
import { resolve } from "path";

const outDirName = "dist";
const currentDir = __dirname;
const outDir = resolve(currentDir, "../", outDirName);

const build = async () => {
  console.log("[i] Cleaning up files...");
  rmSync(outDir, { recursive: true, force: true });
  console.log("[✔] Done cleaning up files!");

  console.log("[i] Building TypeScript...");
  execSync("npx tsc");
  console.log("[✔] Done building TypeScript!");
};

console.time("build-script");
build();
console.timeEnd("build-script");
