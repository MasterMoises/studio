
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, FileText, ListChecks, Gift } from 'lucide-react';
import Image from 'next/image';

const items = [
  {
    icon: Youtube,
    title: 'Vídeo Aulas Práticas',
    description: 'Assiste, aplica e recebe resposta. Sem blá blá blá.',
    imageSrc: 'https://placehold.co/300x200.png',
    imageAlt: 'Video aulas mockup',
    aiHint: 'online course interface' 
  },
  {
    icon: FileText,
    title: 'Desafio completo em PDF',
    description: 'Missões diárias pra sair do “oi” até o encontro.',
    imageSrc: 'https://placehold.co/300x200.png',
    imageAlt: 'PDF desafio mockup',
    aiHint: 'ebook cover design' 
  },
  {
    icon: ListChecks,
    title: 'Checklist de progresso',
    description: 'Marca o que já fez e mantém o foco.',
    imageSrc: 'https://placehold.co/300x150.png',
    imageAlt: 'Checklist mockup',
    aiHint: 'digital checklist app' 
  },
  {
    icon: Gift,
    title: 'Mini-guia: Como Convidar Sem Parecer Carente',
    description: 'Aprenda a chamar pro rolê com classe, sem se humilhar.',
    imageSrc: 'https://placehold.co/300x150.png',
    imageAlt: 'Mini-guia mockup',
    aiHint: 'strategy guide cover' 
  },
];

export function WhatYouGetSection() {
  return (
    <section className="py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl text-center text-primary-red mb-12 uppercase">
          O Que Você Leva pra Casa (Literalmente, é Digital)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <Card key={index} className="bg-card border-primary-custom shadow-xl flex flex-col hover:shadow-primary/30 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1">
              <CardHeader className="flex-shrink-0 p-6 md:p-8">
                <div className="flex items-center mb-3">
                  <item.icon className="w-10 h-10 mr-4 text-accent-yellow" />
                  <CardTitle className="font-headline text-2xl lg:text-3xl text-accent-yellow uppercase">{item.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-base lg:text-lg">{item.description}</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center items-center p-6 md:p-8 pt-0">
                <div className="relative w-full aspect-[3/2] max-w-sm rounded-md overflow-hidden shadow-lg mx-auto">
                  <Image 
                    src={item.imageSrc} 
                    alt={item.imageAlt} 
                    layout="fill" 
                    objectFit="cover" 
                    data-ai-hint={item.aiHint}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-16 font-headline text-2xl md:text-3xl">
          7 dias. Uma missão por dia. <span className="text-primary-red">E o jogo muda.</span>
        </p>
      </div>
    </section>
  );
}
