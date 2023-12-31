import { Card, CardContent, CardTitle } from '@/components/ui/card';

export default function Quest({
  header,
  content,
}: {
  header: string;
  content: string[];
}) {
  return (
    <div>
      <Card className="flex flex-col gap-5 p-5">
        <CardTitle className="text-center text-5xl">{header}</CardTitle>

        <CardContent className="flex justify-center">
          <div className="flex flex-col gap-3">
            {content.map((item, index) => {
              return (
                <Card key={index} className="bg-card">
                  <CardTitle className="invisible text-sm">Title</CardTitle>

                  <CardContent className="flex items-center justify-center text-lg font-medium">
                    {item}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
