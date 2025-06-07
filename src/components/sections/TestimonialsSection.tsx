
'use client';
import type { Testimonial } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const testimonials: Testimonial[] = [
  {
    quote: 'Eu tava travado. No 3º dia do desafio, consegui engatar uma conversa que virou rolê no sábado.',
    name: 'Bruno S.',
    location: 'SP',
  },
  {
    quote: 'Mandei uma das mensagens do guia e ela respondeu: ‘amei sua abordagem 😍’. Valeu cada centavo.',
    name: 'Camila V.',
    location: 'RJ',
  },
  {
    quote: 'Achei que era papo de curso genérico, mas no fim da semana tinha encontro marcado. Funcionou real.',
    name: 'Henrique M.',
    location: 'DF',
  },
  {
    quote: 'As mensagens prontas me salvaram. É tipo código secreto. Ela responde na hora.',
    name: 'Lucas G.',
    location: 'MG',
  },
  {
    quote: 'O manual da friendzone devia ser obrigatório. Só com aquilo eu já mudei minha postura.',
    name: 'Rafaela M.',
    location: 'PR',
  },
];

const AnimatedTestimonialCard = ({ testimonial, index }: { testimonial: Testimonial, index: number }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div ref={ref} className="w-full">
      <Card 
        className={cn(
          "bg-card text-card-foreground shadow-lg border border-muted transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 h-full scroll-animate-fade-in-up",
          { 'is-visible': isInView }
        )}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <CardContent className="p-6 flex flex-col h-full">
          <Quote className="w-8 h-8 text-primary-red mb-4 transform -scale-x-100 flex-shrink-0" />
          <p className="text-lg italic mb-6 leading-relaxed flex-grow">“{testimonial.quote}”</p>
          <div className="text-right mt-auto flex-shrink-0">
            <p className="font-bold text-accent-yellow text-lg">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function TestimonialsSection() {
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
          <MessageCircle className="w-10 h-10 mr-3 text-primary-red" /> O Que Quem Já Fez Tem a Dizer:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedTestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
