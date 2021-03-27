import React from 'react';
import { render, screen } from "@testing-library/react";

import { WorkItem } from "./WorkItem";

describe("WorkItem", () => {
  it("renders title", () => {
    render(<WorkItem />);
    const title = screen.getByText("Hello!");
    expect(title).toBeInTheDocument();
  });

  it("renders work item", () => {
    const { asFragment } = render(<WorkItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
