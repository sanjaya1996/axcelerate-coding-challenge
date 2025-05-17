import array from "./array";

type Person = {
  id: number;
  name: string;
  email: string;
  age?: number;
};

const people: Person[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 30 },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com", age: 25 },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 40 },
];

describe("array.searchList", () => {
  it("returns full list if searchTerm is empty or whitespace", () => {
    expect(array.searchList(people, "", ["name"])).toEqual(people);
    expect(array.searchList(people, "   ", ["name"])).toEqual(people);
  });

  it("returns matching items by name", () => {
    const result = array.searchList(people, "bob", ["name"]);
    expect(result).toEqual([
      { id: 2, name: "Bob Smith", email: "bob.smith@example.com", age: 25 },
    ]);
  });

  it("returns matching items by email", () => {
    const result = array.searchList(people, "example.com", ["email"]);
    expect(result).toEqual(people);
  });

  it("returns matching items by multiple keys", () => {
    const result = array.searchList(people, "charlie", ["name", "email"]);
    expect(result).toEqual([
      { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 40 },
    ]);
  });

  it("is case-insensitive", () => {
    const result = array.searchList(people, "ALICE", ["name"]);
    expect(result).toEqual([
      { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 30 },
    ]);
  });

  it("ignores non-string keys", () => {
    const result = array.searchList(people, "30", ["age"]);
    expect(result).toEqual([]); // age is number, should be ignored
  });
});
