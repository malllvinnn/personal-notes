import ActivedNotes from "./components/ActivedNotes";
import { getInitialData, showFormattedDate } from "./utils/index";

import "./App.css";

function App() {
  const initialData = getInitialData();

  return (
    <>
      <ActivedNotes
        initialData={initialData}
        formaterDate={showFormattedDate}
      />
    </>
  );
}

export default App;
