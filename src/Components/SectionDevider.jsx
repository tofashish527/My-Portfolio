import { Zap } from "lucide-react"; // lightning icon

export default function SectionDivider() {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"></div>
      <Zap className="mx-3 text-cyan-500 animate-pulse" size={28} />
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full"></div>
    </div>
  );
}
