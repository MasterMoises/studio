
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, Star, FileText, ListChecks, Youtube, Gift, Headphones, Brain, MessageCircle, RefreshCw } from 'lucide-react';
import type { Plan, PlanFeature } from '@/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const planFeaturesList: { title: string; beginnerKey: keyof typeof featuresByPlan.beginner; completeKey: keyof typeof featuresByPlan.complete }[] = [
  { title: 'Desafio de 7 dias (PDF)', beginnerKey: 'desafioPDF', completeKey: 'desafioPDF' },
  { title: 'Checklist diário', beginnerKey: 'checklist', completeKey: 'checklist' },
  { title: 'Vídeo aulas práticas', beginnerKey: 'videoAulas', completeKey: 'videoAulas' },
  { title: 'Mini-guia: como convidar', beginnerKey: 'miniGuia', completeKey: 'miniGuia' },
  { title: 'Modelos prontos de mensagens', beginnerKey: 'modelosMensagens', completeKey: 'modelosMensagens' },
  { title: 'Áudios com dicas de postura/entonação', beginnerKey: 'audiosDicas', completeKey: 'audiosDicas' },
  { title: 'Análise de conversas reais', beginnerKey: 'analiseConversas', completeKey: 'analiseConversas' },
  { title: '10 Frases que fazem ela responder', beginnerKey: 'frasesImpacto', completeKey: 'frasesImpacto' },
  { title: 'Manual da Friendzone', beginnerKey: 'manualFriendzone', completeKey: 'manualFriendzone' },
  { title: 'Atualizações futuras', beginnerKey: 'atualizacoes', completeKey: 'atualizacoes' },
];

const featuresByPlan = {
  beginner: {
    desafioPDF: true, checklist: true, videoAulas: true, miniGuia: true,
    modelosMensagens: false, audiosDicas: false, analiseConversas: false,
    frasesImpacto: false, manualFriendzone: false, atualizacoes: false,
  },
  complete: {
    desafioPDF: true, checklist: true, videoAulas: true, miniGuia: true,
    modelosMensagens: true, audiosDicas: true, analiseConversas: true,
    frasesImpacto: true, manualFriendzone: true, atualizacoes: true,
  }
};

const plans: Plan[] = [
  {
    name: 'Plano Iniciante',
    price: 'R$10,00',
    description: 'Comece com o essencial. Dê o primeiro passo pra sair do vácuo.',
    features: [
      'Ideal pra quem quer começar com estratégia simples.',
      'Sem modelos prontos. Sem atalhos. No foco.'
    ],
    ctaText: 'QUERO COMEÇAR COM O BÁSICO – R$10',
    details: [
      { icon: Youtube, text: 'Vídeo Aulas Práticas' },
      { icon: FileText, text: 'Desafio completo em PDF' },
      { icon: ListChecks, text: 'Checklist de progresso' },
      { icon: Gift, text: 'Mini-guia: Como Convidar Sem Parecer Carente' },
    ]
  },
  {
    name: 'Plano Completo',
    price: 'R$37,00',
    description: 'Pra quem quer ir além do “oi” e virar o cara que ela QUER ver.',
    features: [],
    ctaText: 'QUERO O COMPLETO COM TUDO – R$37',
    isPopular: true,
    details: [
      { icon: Youtube, text: 'Vídeo Aulas Práticas' },
      { icon: FileText, text: 'Desafio completo em PDF' },
      { icon: ListChecks, text: 'Checklist de progresso' },
      { icon: Gift, text: 'Mini-guia: Como Convidar Sem Parecer Carente' },
      { icon: MessageCircle, text: 'Mensagens prontas pra cada fase' },
      { icon: Headphones, text: 'Áudios bônus (postura, voz, impacto)' },
      { icon: Brain, text: 'Análise de conversas reais comentadas' },
      { icon: MessageCircle, text: '10 Frases que Fazem Ela Querer Responder' },
      { icon: FileText, text: 'Manual da Friendzone' },
      { icon: RefreshCw, text: 'Atualizações futuras inclusas' },
    ]
  },
];

const AnimatedPlanCard = ({ plan, index }: { plan: Plan, index: number }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div ref={ref} className="w-full">
      <Card 
        className={cn(
          `flex flex-col bg-card border-2 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 scroll-animate-fade-in-up`,
          plan.isPopular ? 'border-accent-yellow shadow-2xl shadow-accent/40 hover:shadow-[0_10px_35px_-5px_hsl(var(--accent)/0.5)]' : 'border-primary-custom shadow-lg',
          { 'is-visible': isInView }
        )}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {plan.isPopular && (
          <div className="bg-accent-yellow text-accent-foreground py-2 px-4 text-center font-bold font-headline uppercase tracking-wider shadow-lg">
            <Star className="inline-block w-5 h-5 mr-2" /> Mais Escolhido <Star className="inline-block w-5 h-5 ml-2" />
          </div>
        )}
        <CardHeader className="p-6 text-center">
          <CardTitle className={`font-headline text-3xl uppercase ${plan.isPopular ? 'text-accent-yellow' : 'text-primary-red'}`}>{plan.name}</CardTitle>
          <p className="font-headline text-4xl md:text-5xl font-bold my-4">{plan.price}</p>
          <CardDescription className="text-muted-foreground min-h-[3em]">{plan.description}</CardDescription>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <ul className="space-y-3 mb-6">
            {plan.details.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <item.icon className={`w-5 h-5 mr-3 mt-1 flex-shrink-0 ${plan.isPopular ? 'text-accent-yellow' : 'text-primary-red'}`} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          {plan.features.map((feature, idx) => (
            <p key={idx} className="text-sm text-muted-foreground mb-2">{feature}</p>
          ))}
        </CardContent>
        <CardFooter className="p-6 bg-secondary/20">
          <Button 
            size="lg" 
            className={`w-full font-headline text-lg uppercase py-4 ${plan.isPopular ? 'bg-accent-yellow text-accent-foreground hover:bg-accent-yellow/90 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-0.5' : 'bg-primary text-primary-foreground bg-primary-hover'}`}
          >
            {plan.ctaText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function PricingSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: comparisonTitleRef, isInView: comparisonTitleInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: tableRef, isInView: tableInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-12 md:py-20 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className={cn(
            "font-headline text-3xl md:text-4xl text-center text-primary-red mb-10 uppercase scroll-animate-fade-in-up",
            { 'is-visible': titleInView }
          )}
        >
          💸 Escolha Seu Plano:
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => (
            <AnimatedPlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <h3 
          ref={comparisonTitleRef}
          className={cn(
            "font-headline text-2xl md:text-3xl text-center text-primary-red my-10 uppercase scroll-animate-fade-in-up",
             { 'is-visible': comparisonTitleInView }
          )}
          style={{ transitionDelay: '100ms' }}
        >
          📊 Tabela Comparativa:
        </h3>
        <div 
          ref={tableRef}
          className={cn(
            "overflow-x-auto bg-card border-2 border-primary-custom rounded-lg shadow-xl p-1 md:p-2 scroll-animate-fade-in-up",
            { 'is-visible': tableInView }
          )}
          style={{ transitionDelay: '200ms' }}
        >
          <table className="w-full min-w-[600px] text-left">
            <thead className="border-b-2 border-primary-custom">
              <tr>
                <th className="p-4 font-headline text-lg uppercase text-primary-red">Recurso</th>
                <th className="p-4 font-headline text-lg uppercase text-center text-primary-red">Plano R$10</th>
                <th className="p-4 font-headline text-lg uppercase text-center text-accent-yellow border-l-2 border-primary-custom">Plano R$37</th>
              </tr>
            </thead>
            <tbody>
              {planFeaturesList.map((featureItem) => (
                <tr key={featureItem.title} className="border-b border-muted last:border-b-0">
                  <td className="p-4 font-medium">{featureItem.title}</td>
                  <td className="p-4 text-center">
                    {featuresByPlan.beginner[featureItem.beginnerKey as keyof typeof featuresByPlan.beginner] ? (
                      <Check className="w-6 h-6 text-[#00FF7F] mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-primary-red mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center border-l-2 border-primary-custom">
                    {featuresByPlan.complete[featureItem.completeKey as keyof typeof featuresByPlan.complete] ? (
                      <Check className="w-6 h-6 text-[#00FF7F] mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-primary-red mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
