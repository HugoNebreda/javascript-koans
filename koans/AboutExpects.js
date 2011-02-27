describe("About Expects", function() {

  it("should assert equality", function () {
    // toEqual() compares using common sense equality
    expect(__).toEqual(1+1);
  });

  //Sometime you need to be really exact
  it("should assert equality with ===", function () {
    // toBe() will always use === to compare
    expect(__).toBe(1+1);
  });

});
