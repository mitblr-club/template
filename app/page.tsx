'use client';

import FAQs from './home/FAQ/faq';
import Info from './home/info/info';
import Title from './home/title';

export default function IndexPage() {
  return (
    <div className="mt-c3 flex flex-col">
      <Title />
      <Info />
      <FAQs />
    </div>
  );
}
