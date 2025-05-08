import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from "./Tabs";
import { TabItemProps } from "./Tabs.interface";

describe("Tabs component", () => {
  const onClickTab2 = vi.fn();

  const mockTabs: TabItemProps[] = [
    { id: "tab1", label: "Tab 1", onClick: vi.fn() },
    { id: "tab2", label: "Tab 2", onClick: onClickTab2 },
  ];

  it("should render tab labels", () => {
    render(<Tabs tabs={mockTabs} activeTab="tab1" />);

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  it("should change the color when is active", () => {
    render(<Tabs tabs={mockTabs} activeTab="tab2" />);
    const tab2 = screen.getByText("Tab 2");

    expect(tab2).toHaveStyle({ color: "#f36f2b"})
  });

  it("chama a função onClick do tab correto ao clicar", () => {
    render(<Tabs tabs={mockTabs} activeTab="tab1" />);
    fireEvent.click(screen.getByText("Tab 2"));

    expect(onClickTab2).toHaveBeenCalled();
  });
});