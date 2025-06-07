import type { FaqItem } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

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

export function FaqSection() {
  return (
    <section className="py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl text-center text-primary-red mb-10 uppercase flex items-center justify-center">
          <HelpCircle className="w-10 h-10 mr-3 text-primary-red" /> Perguntas Frequentes (FAQ)
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-primary-custom mb-2 bg-card rounded-lg shadow-md overflow-hidden">
                <AccordionTrigger className="p-6 text-left hover:no-underline">
                  <span className="font-headline text-xl text-primary-red uppercase">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-muted-foreground text-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
