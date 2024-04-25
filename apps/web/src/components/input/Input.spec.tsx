import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { Input } from ".";

describe("Components/Input", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
  });
});
