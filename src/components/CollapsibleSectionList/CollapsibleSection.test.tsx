import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CollapsibleSection from "./CollapsibleSection";

describe("CollapsibleSection", () => {
  const title = "Section Title";
  const contentText = "This is the content inside the section";

  test("renders title and children content initially expanded", () => {
    render(
      <CollapsibleSection title={title}>
        <div>{contentText}</div>
      </CollapsibleSection>
    );

    // Title is visible
    expect(screen.getByText(title)).toBeInTheDocument();

    // Content is visible initially (collapsed === false)
    expect(screen.getByText(contentText)).toBeInTheDocument();

    // ChevronDown icon visible when expanded
    expect(screen.getByTestId("chevron-down-icon")).toBeInTheDocument();
  });

  test("toggles collapse state and icons on header click", () => {
    render(
      <CollapsibleSection title={title}>
        <div>{contentText}</div>
      </CollapsibleSection>
    );

    const header = screen.getByText(title).parentElement!;
    expect(header).toBeInTheDocument();

    // Content visible initially
    expect(screen.getByText(contentText)).toBeInTheDocument();

    // Click to collapse
    fireEvent.click(header);

    // Content should be hidden
    expect(screen.queryByText(contentText)).toBeNull();

    // ChevronRight icon visible when collapsed
    expect(screen.getByTestId("chevron-right-icon")).toBeInTheDocument();

    // Click to expand again
    fireEvent.click(header);

    expect(screen.getByText(contentText)).toBeInTheDocument();
    expect(screen.getByTestId("chevron-down-icon")).toBeInTheDocument();
  });
});
