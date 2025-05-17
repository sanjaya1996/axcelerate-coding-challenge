import string from "./string";

describe("string.capitalize", () => {
  it("capitalizes the first letter of a lowercase word", () => {
    expect(string.capitalize("hello")).toBe("Hello");
  });

  it("returns the same string if the first letter is already capitalized", () => {
    expect(string.capitalize("World")).toBe("World");
  });

  it("handles empty string", () => {
    expect(string.capitalize("")).toBe("");
  });

  it("returns empty string for non-string input (e.g. number)", () => {
    expect(string.capitalize(123 as unknown as string)).toBe("");
  });

  it("capitalizes strings with special characters", () => {
    expect(string.capitalize("çoffee")).toBe("Çoffee");
  });
});
