import { TabContainer, TabItem } from "./styled";
import { TabItemProps, TabProps } from "./Tabs.interface";

export const Tabs = ({ tabs, activeTab }: TabProps) => {
  return (
    <TabContainer>
        {tabs?.map((tab: TabItemProps) => (
          <TabItem
            key={tab?.id}
            $isActive={tab?.id === activeTab}
            onClick={tab?.onClick}
          >
            {tab?.label}
          </TabItem>

        ))}

    </TabContainer>
  );
}