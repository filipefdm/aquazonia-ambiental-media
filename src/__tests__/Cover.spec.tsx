import { render } from "@testing-library/react";
import { Cover } from "../container/Cover/Cover";

describe("Cover container", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Cover />);
    const title = getByText(/Aquazônia/i);
    const subtitle = getByText(/A FLORESTA-ÁGUA/i);
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
