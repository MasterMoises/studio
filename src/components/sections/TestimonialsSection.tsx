import type { Testimonial } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, MessageCircle } from 'lucide-react';

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

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl text-center text-primary-red mb-10 uppercase flex items-center justify-center">
          <MessageCircle className="w-10 h-10 mr-3 text-primary-red" /> O Que Quem Já Fez Tem a Dizer:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card text-card-foreground shadow-lg border border-muted transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary-red mb-4 transform -scale-x-100" />
                <p className="text-lg italic mb-6 leading-relaxed">“{testimonial.quote}”</p>
                <div className="text-right">
                  <p className="font-bold text-accent-yellow text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
