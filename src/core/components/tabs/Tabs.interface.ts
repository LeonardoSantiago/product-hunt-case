export interface TabItemProps {
    id: string;
    label: string;
    onClick: () => void;
}

export interface TabProps {
    tabs: TabItemProps[];
    activeTab: string;
}