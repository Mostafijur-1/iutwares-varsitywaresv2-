import FetchProducts from "./components/FetchProducts";

function App() {
  return (
    <>
      <div className="p-5 bg-[#E3EAF4]">
        <h1 className="text-3xl font-bold underline text-center">
          Varsity Wares
        </h1>
        <FetchProducts />
      </div>
    </>
  );
}

export default App;
