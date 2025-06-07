
'use client';

import type { ChallengeDay } from '@/types';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Flame, CheckCircle2, Circle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const initialChallengeDays: ChallengeDay[] = [
  { id: 'day1', day: 1, title: 'Quebrando o Gelo Inicial', mission: 'Envie uma primeira mensagem criativa e autêntica para alguém que te interessa. Use o Gerador de Mensagens IA para inspiração!' },
  { id: 'day2', day: 2, title: 'Mantendo a Chama Acesa', mission: 'Desenvolva a conversa com perguntas abertas e demonstre interesse genuíno. Evite respostas monossilábicas.' },
  { id: 'day3', day: 3, title: 'A Arte da Conexão', mission: 'Compartilhe algo pessoal (um hobby, uma paixão) e incentive a outra pessoa a fazer o mesmo. Crie pontos em comum.' },
  { id: 'day4', day: 4, title: 'Elevando a Atração', mission: 'Use humor e confiança na sua comunicação. Mostre seu valor sem arrogância.' },
  { id: 'day5', day: 5, title: 'Sinalizando o Interesse', mission: 'Comece a sutilmente indicar o interesse em um encontro. Observe a receptividade.' },
  { id: 'day6', day: 6, title: 'O Convite Estratégico', mission: 'Use o mini-guia "Como Convidar Sem Parecer Carente" e faça o convite para um encontro casual e divertido.' },
  { id: 'day7', day: 7, title: 'Consolidando o Encontro', mission: 'Confirme os detalhes do encontro e mantenha uma comunicação leve e positiva até o dia.' },
];

const AnimatedChallengeCard = ({ day, completed, onProgressChange, index }: { day: ChallengeDay, completed: boolean, onProgressChange: (dayId: string, checked: boolean) => void, index: number }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div ref={ref} className="w-full">
      <Card 
        className={cn(
          `bg-background border scroll-animate-fade-in-up`,
          completed ? 'border-accent-yellow shadow-accent-yellow/30 shadow-lg' : 'border-muted',
          { 'is-visible': isInView }
        )}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-headline text-xl md:text-2xl text-accent-yellow uppercase">
              Dia {day.day}: {day.title}
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Checkbox
                id={day.id}
                checked={completed || false}
                onCheckedChange={(checked) => onProgressChange(day.id, !!checked)}
                aria-labelledby={`${day.id}-label`}
                className="border-accent-yellow data-[state=checked]:bg-accent-yellow data-[state=checked]:text-background"
              />
              <Label htmlFor={day.id} id={`${day.id}-label`} className="text-sm text-foreground cursor-pointer">
                {completed ? 'Concluído!' : 'Marcar como concluído'}
              </Label>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-foreground">
            <strong>Missão:</strong> {day.mission}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}


export function ChallengeProgress() {
  const [completedDays, setCompletedDays] = useState<Record<string, boolean>>({});
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: subtitleRef, isInView: subtitleInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: completionMessageRef, isInView: completionMessageInView } = useScrollAnimation({ threshold: 0.2 });


  useEffect(() => {
    const storedProgress = localStorage.getItem('challengeProgress');
    if (storedProgress) {
      setCompletedDays(JSON.parse(storedProgress));
    } else {
      const initialProgress: Record<string, boolean> = {};
      initialChallengeDays.forEach(day => initialProgress[day.id] = false);
      setCompletedDays(initialProgress);
    }
  }, []);

  const handleProgressChange = (dayId: string, checked: boolean) => {
    const newCompletedDays = { ...completedDays, [dayId]: checked };
    setCompletedDays(newCompletedDays);
    localStorage.setItem('challengeProgress', JSON.stringify(newCompletedDays));
  };
  
  const allDaysCompleted = initialChallengeDays.every(day => completedDays[day.id]);

  return (
    <section className="py-12 md:py-16 bg-card text-card-foreground rounded-lg shadow-xl border border-primary-custom">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className={cn(
            "font-headline text-3xl md:text-4xl text-center text-primary-red mb-4 uppercase flex items-center justify-center scroll-animate-fade-in-up",
            { 'is-visible': titleInView }
          )}
        >
          <Flame className="w-8 h-8 mr-2 text-primary-red" />
          Seu Desafio de 7 Dias
        </h2>
        <p 
          ref={subtitleRef}
          className={cn(
            "text-center text-muted-foreground mb-8 scroll-animate-fade-in-up",
            { 'is-visible': subtitleInView }
          )}
          style={{transitionDelay: '150ms'}}
        >
          Marque suas missões diárias e veja seu progresso para transformar o "oi" em um encontro!
        </p>
        <div className="space-y-6">
          {initialChallengeDays.map((day, index) => (
            <AnimatedChallengeCard 
              key={day.id} 
              day={day} 
              completed={completedDays[day.id]} 
              onProgressChange={handleProgressChange}
              index={index}
            />
          ))}
        </div>
        {allDaysCompleted && (
          <div 
            ref={completionMessageRef}
            className={cn(
              "mt-10 text-center p-6 bg-accent rounded-lg scroll-animate-fade-in-up",
              { 'is-visible': completionMessageInView }
            )}
            style={{transitionDelay: '300ms'}}
          >
            <CheckCircle2 className="w-12 h-12 text-background mx-auto mb-3" />
            <p className="font-headline text-2xl text-background uppercase">Parabéns! Você completou o desafio!</p>
            <p className="text-background/80">Continue aplicando o que aprendeu e veja a mágica acontecer.</p>
          </div>
        )}
      </div>
    </section>
  );
}
