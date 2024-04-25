import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { Button } from ".";

describe("Components/Button", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });
});
