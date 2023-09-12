import { RadioCardGroup } from "./components/RadioCardGroup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-12">
        <RadioCardGroup careers={["Chef", "Plumber"]} />
      </div>
    </main>
  );
}
