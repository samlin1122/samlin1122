import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WorkList from "./WorkList";
import { projects } from "@/content/projects";

describe("WorkList", () => {
  it("renders a card for every project", () => {
    render(<WorkList locale="en" />);
    for (const p of projects) {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    }
  });

  it("shows the English description for each project", () => {
    render(<WorkList locale="en" />);
    expect(screen.getByText(projects[0].description.en)).toBeInTheDocument();
  });
});
