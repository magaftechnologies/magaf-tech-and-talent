import { describe, expect, it } from "vitest";
import { companyStats, projects } from "@/components/site/data";

describe("MAGAF public content rules", () => {
  it("contains exactly the three supplied company achievements", () => {
    expect(companyStats).toEqual([
      { value: 3, suffix: "+", label: "Clients & Projects Delivered" },
      { value: 20, suffix: "+", label: "Courses & Learning Programs" },
      { value: 40, suffix: "+", label: "Advertising & Promotional Videos" },
    ]);
  });

  it("does not include the removed industry-specific demo project names", () => {
    const names = projects.map((project) => project.t);
    expect(names).not.toContain("School Website");
    expect(names).not.toContain("Clinic Website");
    expect(names).not.toContain("Gym Website");
    expect(names).not.toContain("Business Dashboard");
  });
});
