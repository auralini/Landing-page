"use client";

import type React from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { z } from "zod";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedButton } from "./animated-button";

// Define Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is invalid" }),
  businessType: z.string().min(1, { message: "Business type is required" }),
  businessSize: z.string().min(1, { message: "Business size is required" }),
  growthGoals: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function GrowthAuditForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    businessType: "",
    businessSize: "",
    growthGoals: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: string;
    error?: string;
  } | null>(null);

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear status messages when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear status messages when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", formData);

      setSubmitStatus({
        success: "Your growth audit request has been submitted successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        businessType: "",
        businessSize: "",
        growthGoals: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        error: "There was a problem submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-xl text-white bg-[#011542]/20 backdrop-blur-md border border-white/5">
      <CardContent className="pt-6">
        {submitStatus?.success && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
            {submitStatus.success}
          </div>
        )}

        {submitStatus?.error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
            {submitStatus.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`text-lg h-14 px-4 placeholder:text-white/70 ${
                errors.name ? "border-red-500" : "border-white/5"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`text-lg h-14 px-4 placeholder:text-white/70 ${
                errors.email ? "border-red-500" : "border-white/5"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 w-full">
              <Select
                value={formData.businessType}
                onValueChange={(value) =>
                  handleSelectChange("businessType", value)
                }
              >
                <SelectTrigger
                  className={`text-lg h-14 w-full px-4 text-white/70 ${
                    errors.businessType ? "border-red-500" : "border-white/5"
                  }`}
                >
                  <SelectValue placeholder="Business Type" />
                </SelectTrigger>
                <SelectContent className="bg-[#011542]/20 backdrop-blur-xl border border-white/5 text-white">
                  <SelectItem value="startup">Startup</SelectItem>
                  <SelectItem value="small_business">Small Business</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                  <SelectItem value="agency">Agency</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.businessType && (
                <p className="text-red-500 text-sm">{errors.businessType}</p>
              )}
            </div>

            <div className="space-y-2 w-full">
              <Select
                value={formData.businessSize}
                onValueChange={(value) =>
                  handleSelectChange("businessSize", value)
                }
              >
                <SelectTrigger
                  className={`text-lg h-14 w-full px-4 text-white/70 ${
                    errors.businessSize ? "border-red-500" : "border-white/5"
                  }`}
                >
                  <SelectValue placeholder="Business Size" />
                </SelectTrigger>
                <SelectContent className="bg-[#011542]/20 backdrop-blur-xl border border-white/5 text-white">
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="501+">501+ employees</SelectItem>
                </SelectContent>
              </Select>
              {errors.businessSize && (
                <p className="text-red-500 text-sm">{errors.businessSize}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Textarea
              name="growthGoals"
              placeholder="Growth Goals"
              value={formData.growthGoals}
              onChange={handleChange}
              className="text-lg px-4 py-3 min-h-[100px] resize-none border-white/5 placeholder:text-white/70"
            />
          </div>

          <AnimatedButton
            type="submit"
            className="rounded-full w-full px-4 py-6 text-[#ffffff] hover:text-black font-medium"
            baseColor="bg-[#0B50EA]"
            endIcon={<ArrowRight className="ml-2 h-5 w-5" />}
          >
            {isSubmitting ? "Submitting..." : "Get My Free Growth Audit"}
          </AnimatedButton>
        </form>
        <Link
          href="/terms"
          className="text-sm text-white hover:underline flex items-center gap-2 pt-5 justify-center"
        >
          <IoLogoWhatsapp className="text-white" size={20} /> Need a Quick Chat?
          Message Us on WhatsApp
        </Link>
      </CardContent>
    </Card>
  );
}
