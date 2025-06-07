'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateMessageSuggestion } from '@/ai/flows/generate-message-suggestion-flow'; // Adjusted path
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2, Sparkles, MessageSquareDashed } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


const formSchema = z.object({
  challengeDay: z.coerce.number().min(1, "Selecione o dia do desafio.").max(7, "Dia inválido."),
  userInput: z.string().min(10, "Forneça mais detalhes sobre a conversa.").max(500, "Limite de 500 caracteres atingido."),
});

type FormData = z.infer<typeof formSchema>;

export function AiMessageTool() {
  const [suggestedMessage, setSuggestedMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      challengeDay: 1,
      userInput: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setSuggestedMessage(null);
    try {
      const result = await generateMessageSuggestion({
        challengeDay: data.challengeDay,
        userInput: data.userInput,
      });
      setSuggestedMessage(result.suggestedMessage);
      toast({
        title: "Sugestão Gerada!",
        description: "Sua mensagem personalizada está pronta.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error generating message suggestion:', error);
      toast({
        title: "Erro ao Gerar Sugestão",
        description: "Houve um problema ao tentar gerar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
      setSuggestedMessage('Erro ao gerar sugestão. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card border-primary-custom shadow-xl">
      <CardHeader className="text-center">
        <Wand2 className="w-12 h-12 text-accent-yellow mx-auto mb-2" />
        <CardTitle className="font-headline text-3xl text-accent-yellow uppercase">Gerador de Mensagens IA</CardTitle>
        <CardDescription className="text-muted-foreground">
          Receba uma sugestão de mensagem personalizada com base no dia do desafio e no contexto da sua conversa.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="challengeDay"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-semibold">Dia do Desafio (1-7)</FormLabel>
                  <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={String(field.value)}>
                    <FormControl>
                      <SelectTrigger className="bg-input border-muted focus:ring-accent-yellow focus:border-accent-yellow">
                        <SelectValue placeholder="Selecione o dia" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-popover border-muted">
                      {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                        <SelectItem key={day} value={String(day)} className="focus:bg-accent focus:text-accent-foreground">
                          Dia {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userInput"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-semibold">Contexto da Conversa</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Conversamos sobre filmes ontem, ela mencionou que gosta de suspense..."
                      className="resize-none bg-input border-muted focus:ring-accent-yellow focus:border-accent-yellow min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-muted-foreground/70">
                    Forneça detalhes sobre a interação para uma sugestão mais eficaz.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-headline uppercase text-lg py-3 bg-primary-hover">
              {isLoading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-5 w-5" />
              )}
              Gerar Mensagem Mágica
            </Button>
          </form>
        </Form>
      </CardContent>
      {suggestedMessage && (
        <CardFooter className="mt-6">
          <Card className="w-full bg-background border-accent-yellow p-4">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-accent-yellow uppercase flex items-center">
                <MessageSquareDashed className="mr-2 h-6 w-6"/>
                Sugestão de Mensagem:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground whitespace-pre-wrap">{suggestedMessage}</p>
            </CardContent>
          </Card>
        </CardFooter>
      )}
    </Card>
  );
}
