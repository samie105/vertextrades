"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Slider } from "../../../components/ui/slider";
import { Textarea } from "../../../components/ui/textarea";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/ui/alert";
import { AlertCircle } from "lucide-react";

interface QuestionnaireFormProps {
  onSubmit: (data: any) => void;
}

export default function QuestionnaireForm({
  onSubmit,
}: QuestionnaireFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmitForm = (data: any) => {
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      onSubmit(data);
    } else {
      setSubmitError("Please fill in all required fields.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="space-y-4">
        <p>
          {
            "     You're not eligible to migrate to a 6-figure trader tier. Please upgrade your account CHP."
          }
        </p>
        <Button asChild>
          <a href="#">Learn More</a>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
      <h2 className="text-lg font-semibold">
        6-Figure Trader Tier Upgrade Questionnaire
      </h2>

      {submitError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{submitError}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="investmentPurpose">Purpose of Investment</Label>
        <Controller
          name="investmentPurpose"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="retirement">Retirement</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="wealthAccumulation">
                  Wealth Accumulation
                </SelectItem>
                <SelectItem value="shortTermProfit">
                  Short-term Profit
                </SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.investmentPurpose && (
          <p className="text-sm text-red-500">
            {errors.investmentPurpose.message as string}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="duration">Investment Duration</Label>
        <Controller
          name="duration"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3months">3 months</SelectItem>
                <SelectItem value="6months">6 months</SelectItem>
                <SelectItem value="9months">9 months</SelectItem>
                <SelectItem value="1year">1 year</SelectItem>
                <SelectItem value="15months">15 months</SelectItem>
                <SelectItem value="18months">18 months</SelectItem>
                <SelectItem value="21months">21 months</SelectItem>
                <SelectItem value="2years">2 years</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.duration && (
          <p className="text-sm text-red-500">
            {errors.duration.message as string}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="riskTolerance">Risk Tolerance</Label>
        <Controller
          name="riskTolerance"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <Slider
              defaultValue={[1]}
              max={3}
              step={1}
              onValueChange={(value) => field.onChange(value[0])}
            />
          )}
        />
        <div className="flex justify-between text-xs">
          <span>Low</span>
          <span>Mid</span>
          <span>High</span>
        </div>
        {errors.riskTolerance && (
          <p className="text-sm text-red-500">
            {errors.riskTolerance.message as string}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="investmentAmount">Planned Investment Amount</Label>
        <Controller
          name="investmentAmount"
          control={control}
          rules={{
            required: "This field is required",
            min: { value: 1, message: "Amount must be greater than 0" },
          }}
          render={({ field }) => (
            <Input type="number" placeholder="Enter amount" {...field} />
          )}
        />
        {errors.investmentAmount && (
          <p className="text-sm text-red-500">
            {errors.investmentAmount.message as string}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="comments">Questions or Comments</Label>
        <Controller
          name="comments"
          control={control}
          render={({ field }) => (
            <Textarea
              placeholder="Enter any questions or comments"
              {...field}
            />
          )}
        />
      </div>

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
