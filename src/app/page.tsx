import { Links } from "@/components/links";
import { Title } from "@/components/title";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between px-24 py-20">
      <Title />
      <Links />
    </div>
  );
}
