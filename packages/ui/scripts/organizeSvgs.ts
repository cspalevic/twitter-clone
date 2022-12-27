import { readdir, writeFile } from "fs/promises";

const run = async () => {
  const files = await readdir("../src/Icon/svgs");
  const output = files
    .filter((file: string) => file !== "index.ts")
    .map((file: string) => {
      const name = file.substring(0, file.indexOf(".tsx"));
      return `export * from "./${name}";`;
    })
    .join("\n");
  writeFile("../src/Icon/svgs/index.ts", output);
};

run();
