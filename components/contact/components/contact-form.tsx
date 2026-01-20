"use client";

import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  title: string;
  nameLabel: string;
  emailLabel: string;
  subjectLabel: string;
  messageLabel: string;
  submitText: string;
  sendingText: string;
  successText: string;
}

export function ContactForm({
  title,
  nameLabel,
  emailLabel,
  subjectLabel,
  messageLabel,
  submitText,
  sendingText,
  successText,
}: ContactFormProps) {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormStatus("success");
  };

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {formStatus === "success" ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
              <MessageSquare className="h-8 w-8" />
            </div>
            <p className="text-lg font-medium text-foreground mb-2">
              {successText}
            </p>
            <Button
              variant="outline"
              onClick={() => setFormStatus("idle")}
              className="mt-4"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{nameLabel}</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{emailLabel}</Label>
                <Input id="email" type="email" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">{subjectLabel}</Label>
              <Input id="subject" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{messageLabel}</Label>
              <Textarea id="message" rows={5} required />
            </div>
            <Button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700"
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending" ? sendingText : submitText}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
