import { pow } from "./pow.js";
import { describe, it } from "mocha";
import { assert } from "chai";

describe("pow", function () {
  it("2 raised to power 2 is 4", function () {
    assert.equal(pow(2, 2), 4);
  });
  it("3 raised to power 3 is 27", function () {
    assert.equal(pow(3, 3), 27);
  });
  it("4 raised to power 4 is 256", function () {
    assert.equal(pow(4, 4), 256);
  });
});

describe("pow: new test", function () {
  describe("basic function", function () {
    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
    return;
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }
  });

  describe("if n is negative", function () {
    it("the result is NaN", function () {
      assert.isNaN(pow(2, -1));
    });
  });
});
