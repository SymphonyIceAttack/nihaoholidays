import { Clock, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ContactMethodsProps {
  emailLabel: string;
  emailDescription: string;
  emailValue: string;
  responseLabel: string;
  responseDescription: string;
  responseValue: string;
}

export function ContactMethods({
  emailLabel,
  emailDescription,
  emailValue,
  responseLabel,
  responseDescription,
  responseValue,
}: ContactMethodsProps) {
  const methods = [
    {
      icon: Mail,
      labelKey: emailLabel,
      descriptionKey: emailDescription,
      value: emailValue,
      color: "from-rose-400 to-rose-600",
    },
    {
      icon: Clock,
      labelKey: responseLabel,
      descriptionKey: responseDescription,
      value: responseValue,
      color: "from-blue-400 to-blue-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto mb-12">
      {methods.map((method, index) => {
        const Icon = method.icon;
        return (
          <Card
            key={method.labelKey}
            className="text-center animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader>
              <div
                className={cn(
                  "inline-flex items-center justify-center w-12 h-12 rounded-xl text-white mb-3 mx-auto",
                  method.color,
                )}
              >
                <Icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">{method.labelKey}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {method.descriptionKey}
              </p>
              <p className="font-medium text-foreground">{method.value}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
