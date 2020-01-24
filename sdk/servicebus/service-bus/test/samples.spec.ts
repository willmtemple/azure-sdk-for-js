import chai from "chai";
import glob from "glob";
import fs from "fs";
import path from "path";

function globAsync(pattern: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(pattern, (error, matches) => {
      if (error) {
        reject(error);
      } else {
        resolve(matches);
      }
    });
  });
}

// Since `npm run build:samples` now update the typescript samples to make them debuggable,
// we now have the below tests to ensure such updates dont get checked in.
describe("Ensure typescript samples use published package", function(): void {
  function testSamples(files: string[], regex: RegExp): void {
    const failingFiles = files.filter((file) => {
      const fileContents = fs.readFileSync(file, { encoding: "utf-8" });
      return !regex.test(fileContents);
    });
    if (failingFiles.length) {
      chai.assert.fail(
        `${failingFiles.length} files (${failingFiles}) dont import @azure/service-bus`
      );
    }
  }

  it("Ensure TypeScript samples use published package", async () => {
    const pattern = path.join(__dirname, "../../samples/typescript/src") + path.sep + "**/*.ts";
    const files = await globAsync(pattern);
    testSamples(files, new RegExp('from\\s"@azure/service-bus"'));
  });

  it("Ensure JavaScript samples use published package", async () => {
    const pattern = path.join(__dirname, "../../samples/javascript") + path.sep + "**/*.js";
    const files = await globAsync(pattern);
    testSamples(files, new RegExp('=\\srequire\\("@azure/service-bus"\\)'));
  });
});
