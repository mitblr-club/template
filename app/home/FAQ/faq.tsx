import { ReactNode } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import data from './data';

export default function FAQs() {
  return (
    <div className="mt-c5 px-c3 pb-c3 md:mt-c1 lg:mt-c1 xl:mt-0">
      <div className="text-md font-bold text-purple-700 dark:text-purple-400">
        FAQs
      </div>
      <div className="text-4xl font-medium">Have a Question?</div>

      <Accordion type="single" collapsible className="w-full px-c3 py-c1">
        {data.map((item, index) => (
          <FAQ.Content key={index} value={`item-${index.toString()}`}>
            <FAQ.Question>
              <div className="text-left">
                {index + 1}. {item.Question}
              </div>
            </FAQ.Question>

            <FAQ.Answer>
              <div className="transition-color font-light">{item.Answer}</div>
            </FAQ.Answer>
          </FAQ.Content>
        ))}
      </Accordion>
    </div>
  );
}

function Content({ children, value }: { children: ReactNode; value: string }) {
  return <AccordionItem value={value}>{children}</AccordionItem>;
}

function Question({ children }: { children: ReactNode }) {
  return <AccordionTrigger>{children}</AccordionTrigger>;
}

function Answer({ children }: { children: ReactNode }) {
  return <AccordionContent>{children}</AccordionContent>;
}

const FAQ = {
  Content: Content,
  Question: Question,
  Answer: Answer,
};
