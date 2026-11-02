import DestructionOfEritrea from "@/app/components/Dictatorship/DestructionOfEritrea";
import DictatorshipHero from "@/app/components/Dictatorship/DictatorshipHero";
import ArchitectureOfPower from "@/app/components/Dictatorship/ArchitectureOfPower";

export default function DictatorshipPage() {
  return (
    <main>
      {/* 1. HERO — THE REALITY OF DICTATORSHIP */}
      <DictatorshipHero />

      {/* 2. THE ARCHITECTURE OF POWER */}
      <ArchitectureOfPower />

      {/* 3. DESTRUCTION OF ERITREA */}

      <DestructionOfEritrea />

    </main>
  );
}