import { AiMessageTool } from '@/components/AiMessageTool';

export function AiMessageToolSection() {
  return (
    <section className="py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <AiMessageTool />
      </div>
    </section>
  );
}
