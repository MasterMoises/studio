import { HeroSection } from '@/components/sections/HeroSection';
import { WhatYouGetSection } from '@/components/sections/WhatYouGetSection';
import { ChallengeProgress } from '@/components/ChallengeProgress';
import { AiMessageToolSection } from '@/components/sections/AiMessageToolSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { GuaranteeSection } from '@/components/sections/GuaranteeSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { Separator } from '@/components/ui/separator';

export default function AtraaoAceleradaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <HeroSection />
      <Separator className="my-10 md:my-16 bg-primary-custom h-0.5" />
      <WhatYouGetSection />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
         <ChallengeProgress />
      </div>
      
      <Separator className="my-10 md:my-16 bg-primary-custom h-0.5" />
      <AiMessageToolSection />
      <Separator className="my-10 md:my-16 bg-primary-custom h-0.5" />
      <TestimonialsSection />
      <Separator className="my-10 md:my-16 bg-primary-custom h-0.5" />
      <PricingSection />
      <GuaranteeSection />
      <FaqSection />
      <footer className="py-10 text-center text-muted-foreground/80 bg-card border-t border-primary-custom mt-12">
        <p className="text-sm">&copy; {new Date().getFullYear()} Atração Acelerada. Todos os direitos reservados.</p>
        <p className="text-xs mt-2 max-w-md mx-auto">Este site e o produto vendido são baseados em entretenimento e experiências subjetivas. Resultados podem variar. Consulte um profissional para aconselhamento individualizado.</p>
      </footer>
    </main>
  );
}
