const cutText = require("../cutText.js");
const expect = require("chai").expect;

describe("cutText", () => {
  it('should return an error if "content" arg is not as string', () => {
    if (typeof content !== "string") return "Error";
    expect(cutText(undefined, 20)).to.equal("Error");
    expect(cutText(12, 20)).to.equal("Error");
    expect(cutText({}, 20)).to.equal("Error");
    expect(cutText([], 20)).to.equal("Error");
    expect(cutText(function () {}, 20)).to.equal("Error");
  });
  it('should return an error if "content" arg length is 0', () => {
    expect(cutText("", 20)).to.equal("Error");
  });
});
