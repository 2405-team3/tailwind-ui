import { Router, Route } from "wouter";
import { Navigation } from "./components/Navigation.tsx";
import { PageKnowledgeBases } from "./components/pages/PageKnowledgeBases.tsx";
import { PageKnowledgeBase } from "./components/pages/PageKnowledgeBase.tsx";

function App() {
  return (
    <>
      <Navigation />
      <main className="ml-72 p-12">
        <Router>
          <Route path="/knowledge-bases" component={PageKnowledgeBases} nest>
            <Route path="/knowledge-bases/:id" component={PageKnowledgeBase} />
          </Route>
        </Router>
      </main>
    </>
  );
}

export default App;
