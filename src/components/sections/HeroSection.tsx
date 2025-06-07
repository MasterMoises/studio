import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MessageSquare, Eye, AlertTriangle, Flame } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 text-center bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Image
            src="https://i.imgur.com/5BCY0pj.png"
            alt="Atração Acelerada Logo"
            width={300}
            height={150}
            className="h-auto"
            priority
          />
        </div>

        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 uppercase">
          Do <span className="text-primary-red">“Oi”</span> ao Encontro em <span className="text-primary-red">7 Dias</span>
        </h1>
        <p className="font-headline text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-10 uppercase">
          Pra Parar de Ser Só Mais Um na Lista de Visualizados Dela
        </p>

        <div className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-xl border border-primary-custom mb-12">
          <h2 className="font-headline text-2xl md:text-3xl text-primary-red mb-4 uppercase flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 mr-2 text-primary-red" />
            A Dor Real Que Você Tá Sentindo
          </h2>
          <p className="text-lg md:text-xl mb-4">
            Você manda “oi”, ela visualiza… <span className="font-bold text-primary-red">e nada.</span>
            <br />
            Nenhum emoji. Nenhum “oiê”. Nenhum “e aí”.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <span className="text-primary-red font-bold">Só silêncio.</span>
          </p>
          <p className="text-lg md:text-xl mb-6">
            Enquanto isso, ela tá <span className="text-accent-yellow">rindo nos stories</span> de outro cara, marcando rolê, e te ignorando como se você nem existisse.
          </p>
          <div className="text-center">
            <Eye className="w-12 h-12 text-primary-red mx-auto mb-2" />
            <p className="text-lg md:text-xl font-bold text-muted-foreground">
              A real? Você tá sendo só <span className="text-accent-yellow">mais um.</span> Um perfil qualquer. O “carinha legal” que ela esquece em 2 minutos. E pior: ela nem sente culpa por isso.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-background p-6 md:p-8 rounded-lg shadow-xl border border-primary-custom">
          <h2 className="font-headline text-2xl md:text-3xl text-primary-red mb-6 uppercase flex items-center justify-center">
            <Flame className="w-8 h-8 mr-2 text-primary-red" />
            A Solução: O Desafio de 7 Dias
          </h2>
          <p className="text-lg md:text-xl mb-4">
            É por isso que nasceu o Desafio <span className="font-bold text-accent-yellow">“Do Oi ao Encontro em 7 Dias”.</span>
          </p>
          <p className="text-lg md:text-xl mb-6">
            Um passo a passo direto, prático e <span className="font-bold">100% digital</span> pra você:
          </p>
          <ul className="text-left space-y-3 text-lg md:text-xl max-w-md mx-auto">
            <li className="flex items-center"><MessageSquare className="w-6 h-6 mr-3 text-primary-red flex-shrink-0" /> Saber o que falar na primeira mensagem</li>
            <li className="flex items-center"><MessageSquare className="w-6 h-6 mr-3 text-primary-red flex-shrink-0" /> Manter a conversa viva com interesse real</li>
            <li className="flex items-center"><MessageSquare className="w-6 h-6 mr-3 text-primary-red flex-shrink-0" /> Saber o momento certo de convidar pro rolê</li>
            <li className="flex items-center"><MessageSquare className="w-6 h-6 mr-3 text-primary-red flex-shrink-0" /> Gerar atração com palavras e atitude</li>
            <li className="flex items-center"><MessageSquare className="w-6 h-6 mr-3 text-primary-red flex-shrink-0" /> Marcar o encontro — mesmo que ela já tenha te ignorado antes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
