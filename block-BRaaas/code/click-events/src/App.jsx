import AnsOne from "./components/AnsOne";
import AnsTwo from "./components/AnsTwo";
import AnsThree from "./components/AnsThree";
import AnsFive from "./components/AnsFive";

function App() {
  return (
    <main className="max-w-3xl mx-auto my-6 flex justify-between flex-wrap gap-8">
      <AnsOne />
      <AnsTwo />
      <AnsThree />
      <AnsFive />
    </main>
  );
}

export default App;
