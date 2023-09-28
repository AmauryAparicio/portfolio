import { Links } from "@/components/links";
import { Title } from "@/components/title";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between px-4 py-4 md:py-20 lg:px-24">
      <Title />
      <Links />
    </div>
  );
}
