import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero";
import { profile } from "@/content/profile";

describe("Hero", () => {
  it("renders the name and the localized tagline", () => {
    render(<Hero locale="en" />);
    expect(screen.getByRole("heading", { name: profile.name })).toBeInTheDocument();
    expect(screen.getByText(profile.tagline.en)).toBeInTheDocument();
  });

  it("renders the Chinese tagline when locale is zh", () => {
    render(<Hero locale="zh" />);
    expect(screen.getByText(profile.tagline.zh)).toBeInTheDocument();
  });
});
