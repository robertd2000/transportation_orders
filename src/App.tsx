import { Providers } from "./components/Providers";
import { Transportations } from "./components/Transportations";
import { Providers } from "./components/Providers";
import dayjs from "dayjs";
import("dayjs/locale/ru");

dayjs.locale("ru");

function App() {
  return (
    <Providers>
      <Transportations />
    </Providers>
  );
}

export default App;
