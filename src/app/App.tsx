import { HomePage } from "@/pages";
import { MobxProvider } from "./providers/mobx/MobxProvider";

function App() {

  return (
    <MobxProvider>
      <HomePage/>
    </MobxProvider>
  )
}

export default App;
