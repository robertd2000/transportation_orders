import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { Transportations } from "./components/Transportations";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          components: {
            Card: {
              borderRadiusLG: 12,
            },
            List: {
              itemPadding: "6px 0",
            },
          },
        }}
      >
        <Transportations />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
