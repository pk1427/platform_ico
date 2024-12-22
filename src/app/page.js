import Header from "./components/Header";
import Body from "./components/Body";
import Functions from "./components/Functions";


export default function Home() {

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Body />
      <Functions />
    </div>
  );
}
