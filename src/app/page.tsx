import Landing from "@/components/Landing/Landing";
export default async function Home() {
  await new Promise((r) => setTimeout(r, 3000));
  return <Landing />;
}
