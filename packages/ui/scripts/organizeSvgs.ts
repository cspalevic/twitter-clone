import { readdir, writeFile } from "fs/promises";

const run = async () => {
  const files = await readdir("../Icon/svgs");
  const output = files
    .filter((file) => file !== "index.ts")
    .map((file) => {
      const name = file.substring(0, file.indexOf(".tsx"));
      return `export * from "./${name}";`;
    })
    .join("\n");
  writeFile("../Icon/svgs/index.ts", output);
};

run();
