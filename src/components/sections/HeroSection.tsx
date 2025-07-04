
'use client';
import Image from 'next/image';
import { Eye, AlertTriangle, Flame, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: subtitleRef, isInView: subtitleInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: painCardRef, isInView: painCardInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: solutionCardRef, isInView: solutionCardInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: introTextRef, isInView: introTextInView } = useScrollAnimation({ threshold: 0.1 });


  return (
    <section className="py-12 md:py-20 text-center bg-gradient-to-b from-background to-card text-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex justify-center mb-8 scroll-animate-fade-in-up",
            { 'is-visible': titleInView }
          )}
          ref={titleRef}
          style={{ transitionDelay: '0ms' }}
        >
          <Image
            src="https://i.imgur.com/5BCY0pj.png"
            alt="Atração Acelerada Logo"
            width={280}
            height={140}
            className="h-auto"
            priority
          />
        </div>

        <h1
          ref={titleRef}
          className={cn(
            "font-headline text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 uppercase scroll-animate-fade-in-up",
            { 'is-visible': titleInView }
          )}
          style={{ transitionDelay: '100ms' }}
        >
          Do <span className="text-primary-red">“Oi”</span> ao Encontro em <span className="text-primary-red">7 Dias</span>
        </h1>
        
        <p
          ref={subtitleRef}
          className={cn(
            "font-headline text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-10 uppercase scroll-animate-fade-in-up",
            { 'is-visible': subtitleInView }
          )}
          style={{ transitionDelay: '300ms' }}
        >
          Pra Parar de Ser Só Mais Um na Lista de Visualizados Dela
        </p>

        <div
          ref={introTextRef}
          className={cn(
            "mb-12 text-center scroll-animate-fade-in-up",
            { 'is-visible': introTextInView }
          )}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            Com o nosso desafio prático e direto ao ponto, você vai destravar suas conversas, criar conexões autênticas e finalmente marcar aquele encontro. Chega de ser ignorado — é hora de virar o jogo!
          </p>
        </div>

        <div
          ref={painCardRef}
          className={cn(
            "max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-2xl border border-primary-custom mb-12 transition-all duration-300 ease-in-out hover:shadow-primary/30 hover:scale-[1.02] hover:-translate-y-1 scroll-animate-fade-in-up",
            { 'is-visible': painCardInView }
          )}
          style={{ transitionDelay: '100ms' }}
        >
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

        <div
          ref={solutionCardRef}
          className={cn(
            "max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-2xl border border-primary-custom transition-all duration-300 ease-in-out hover:shadow-primary/30 hover:scale-[1.02] hover:-translate-y-1 scroll-animate-fade-in-up",
            { 'is-visible': solutionCardInView }
          )}
          style={{ transitionDelay: '200ms' }}
        >
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
          <ul className="text-left space-y-4 text-lg md:text-xl max-w-md mx-auto">
            <li className="flex items-start"><CheckCircle className="w-7 h-7 mr-3 text-primary-red flex-shrink-0 mt-1" /> Saber o que falar na primeira mensagem</li>
            <li className="flex items-start"><CheckCircle className="w-7 h-7 mr-3 text-primary-red flex-shrink-0 mt-1" /> Manter a conversa viva com interesse real</li>
            <li className="flex items-start"><CheckCircle className="w-7 h-7 mr-3 text-primary-red flex-shrink-0 mt-1" /> Saber o momento certo de convidar pro rolê</li>
            <li className="flex items-start"><CheckCircle className="w-7 h-7 mr-3 text-primary-red flex-shrink-0 mt-1" /> Gerar atração com palavras e atitude</li>
            <li className="flex items-start"><CheckCircle className="w-7 h-7 mr-3 text-primary-red flex-shrink-0 mt-1" /> Marcar o encontro — mesmo que ela já tenha te ignorado antes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
