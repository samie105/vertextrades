"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/ui/alert";
import { AlertCircle } from "lucide-react";
import QuestionnaireForm from "./questionnaire-form";

interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuestionnaireModal({
  isOpen,
  onClose,
}: QuestionnaireModalProps) {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = (data: any) => {
    if (
      Object.values(data).some((value) => value === undefined || value === "")
    ) {
      setSubmitError("Please fill in all required fields.");
    } else {
      console.log(data);
      // Here you would typically send the data to your backend
      // For now, we'll just show the ineligibility message
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>6-Figure Trader Tier Upgrade Questionnaire</DialogTitle>
        </DialogHeader>
        {submitError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{submitError}</AlertDescription>
          </Alert>
        )}
        <QuestionnaireForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}
