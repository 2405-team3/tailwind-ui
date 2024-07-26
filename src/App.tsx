import { Switch, Route } from "wouter";
import { Navigation } from "./components/Navigation.tsx";
import { PageKnowledgeBases } from "./components/pages/PageKnowledgeBases.tsx";

function App() {
  return (
    <>
      <Navigation />
      <main className="ml-72 p-12">
        <Switch>
          <Route path="/knowledge-bases" component={PageKnowledgeBases} />
        </Switch>
      </main>
    </>
  );
}

export default App;
