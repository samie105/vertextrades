"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import QuestionnaireForm from "./questionnaire-form";
interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuestionnaireModal({
  isOpen,
  onClose,
}: QuestionnaireModalProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (data: any) => {
    if (
      Object.values(data).some((value) => value === undefined || value === "")
    ) {
      setErrorMessage("Please fill in all required fields.");
    } else {
      console.log(data);
      // Here you would typically send the data to your backend
      // For now, we'll just show the ineligibility message
      setErrorMessage(
        "You're not eligible to migrate to a 6-figure trader tier. Please upgrade your account CHP."
      );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] rounded-md">
        <DialogHeader>
          <DialogTitle>Questionnaire</DialogTitle>
        </DialogHeader>
        {errorMessage ? (
          <div className="space-y-4">
            <p>{errorMessage}</p>
            {errorMessage.includes("not eligible") && (
              <a href="#" className="text-blue-500 hover:underline">
                Learn More
              </a>
            )}
          </div>
        ) : (
          <QuestionnaireForm onSubmit={handleSubmit} />
        )}
      </DialogContent>
    </Dialog>
  );
}
