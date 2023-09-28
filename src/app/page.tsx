import { Links } from "@/components/links";
import { Title } from "@/components/title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Title />
      <Links />
    </main>
  );
}
