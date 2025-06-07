import { ShieldCheck, RefreshCw } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="py-12 md:py-20 bg-[#B00020] text-white">
      <div className="container mx-auto px-4 text-center">
        <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-white" />
        <h2 className="font-headline text-3xl md:text-4xl mb-4 uppercase">
          <RefreshCw className="inline-block w-8 h-8 mr-2" /> Garantia de 7 Dias (Sem Caô)
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Você tem <span className="font-bold uppercase">7 dias de garantia incondicional</span>.
          Se você aplicar e não sentir diferença, pede reembolso e acabou.
        </p>
        <p className="font-headline text-xl md:text-2xl uppercase">
          Confiança total. Risco zero. <span className="bg-accent-yellow text-accent-foreground px-2 py-1 rounded">Resultado ou grana de volta.</span>
        </p>
      </div>
    </section>
  );
}
