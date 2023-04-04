const attack = require("./attack");

test("should return damage sentence", () => {
  const result = attack("ogre", 200);

  expect(result).toBe("ogre dealt 200 damage");
  expect(result).toMatchInlineSnapshot(`"ogre dealt 200 damage"`);
});
