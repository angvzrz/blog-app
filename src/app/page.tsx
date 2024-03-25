import { Card } from "./components/ui/card";

export default function Home() {
  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      <Card className="w-32 h-24"></Card>
      <Card className="w-32 h-24"></Card>
      <Card className="w-32 h-24"></Card>
      <Card className="w-32 h-24"></Card>
      <Card className="w-32 h-24"></Card>
      <Card className="w-32 h-24"></Card>
    </main>
  );
}
