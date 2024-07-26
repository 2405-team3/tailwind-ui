import { Switch, Route } from "wouter";
import { Navigation } from "./components/Navigation.tsx";
import { KnowledgeBases } from "./components/pages/KnowledgeBases.tsx";

function App() {
  return (
    <>
      <Navigation />
      <main className="ml-72 p-12">
        <Switch>
          <Route path="/knowledge-bases" component={KnowledgeBases} />
        </Switch>
      </main>
    </>
  );
}

export default App;
