import StatCard from "./StatCard";

export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <StatCard />
      <StatCard />
      <StatCard />
    </div>
  );
}