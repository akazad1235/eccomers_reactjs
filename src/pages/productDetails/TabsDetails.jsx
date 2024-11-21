import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
const TabsDetails = () => {
    const [activeTab, setActiveTab] = React.useState("description");
    const data = [
      {
        label: "Description",
        value: "description",
        desc: `The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.
              To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.`,
      },
      {
        label: "Reviews",
        value: "reviews",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "Shipping Policy",
        value: "shipping-policy",
        desc: `
              Shipping policy
              It's important to start by clarifying to customers that your order processing times are separate from the shipping times they see at checkout. 

              All orders are processed within X to X business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped. 

              Include any other pertinent information towards the beginning, such as potential delays due to a high volume of orders or postal service problems that are outside of your control.

              Domestic Shipping Rates and Estimates
              For calculated shipping rates: Shipping charges for your order will be calculated and displayed at checkout. 

              For simple flat rate shipping: We offer $X flat rate shipping to [list countries]. 

              You can also emphasize any free shipping thresholds you offer (e.g. free shipping for orders over $75). For multiple shipping options, you can list carrier options, prices, and delivery times in a table.           
        `,
      },
    ];
    return (
        <Tabs value={activeTab}>
          <TabsHeader
            className="p-0 bg-transparent border-b rounded-none border-blue-gray-50"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-secondary shadow-none rounded-none w-40",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-gray-900 font-bold w-40" : "text-gray-900 font-bold w-40"}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      );
};

export default TabsDetails;