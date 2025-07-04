
'use client';
import type { FaqItem } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const faqItems: FaqItem[] = [
  {
    question: 'Como recebo o conteúdo após a compra?',
    answer: 'No seu e-mail. Acesso imediato e 100% digital.',
  },
  {
    question: 'É pra homem ou mulher?',
    answer: 'Pra qualquer um que já foi ignorado querendo chamar alguém pra sair.',
  },
  {
    question: 'Preciso ter experiência com paquera?',
    answer: 'Não. O desafio é pra quem não sabe o que dizer e vive travando.',
  },
  {
    question: 'Funciona pra tímido?',
    answer: 'SIM! Cada missão quebra o gelo, passo a passo.',
  },
  {
    question: 'Posso fazer no meu tempo?',
    answer: 'Pode. Você tem acesso vitalício.',
  },
  {
    question: 'Tem suporte?',
    answer: 'Sim. Qualquer problema técnico, é só chamar no e-mail.',
  },
  {
    question: 'Funciona mesmo?',
    answer: 'Funciona. Se você aplicar, você sai do vácuo.',
  },
];

const AnimatedAccordionItem = ({ item, index }: { item: FaqItem, index: number }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: false }); // Set triggerOnce to false if you want re-animation
  return (
    <div ref={ref} className="w-full">
      <AccordionItem
        value={`item-${index}`}
        className={cn(
          "border-b-primary-custom mb-2 bg-card rounded-lg shadow-md overflow-hidden scroll-animate-fade-in-up",
          { 'is-visible': isInView }
        )}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <AccordionTrigger className="p-6 text-left hover:no-underline">
          <span className="font-headline text-xl text-primary-red uppercase">{item.question}</span>
        </AccordionTrigger>
        <AccordionContent className="p-6 pt-0 text-muted-foreground text-lg">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}

export function FaqSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-12 md:py-20 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className={cn(
            "font-headline text-3xl md:text-4xl text-center text-primary-red mb-10 uppercase flex items-center justify-center scroll-animate-fade-in-up",
            { 'is-visible': titleInView }
          )}
        >
          <HelpCircle className="w-10 h-10 mr-3 text-primary-red" /> Perguntas Frequentes (FAQ)
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AnimatedAccordionItem key={index} item={item} index={index} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
