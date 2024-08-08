import { renderCurrentTest } from "../test-utils";

describe("Preset - color-*", () => {
  test("color-black", async () => {
    expect(await renderCurrentTest()).toStrictEqual({
      props: { style: { color: "rgba(0, 0, 0, 1)" } },
    });
  });
});
