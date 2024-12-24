"use client";

import { useState } from "react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import QuestionnaireModal from "./questionaire-modal";

export default function MigrationCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Migration to 6-Figure Trader Tier</CardTitle>
          <p className="text-sm text-muted-foreground">Connect account now</p>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">Current Balance: $0</p>
          <p className="text-sm text-muted-foreground mt-2">
            Upgrade your account to access advanced trading features
          </p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <p className="text-sm font-medium">Check tier availability</p>
          <Button onClick={() => setIsModalOpen(true)}>Migrate</Button>
        </CardFooter>
      </Card>
      <QuestionnaireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
