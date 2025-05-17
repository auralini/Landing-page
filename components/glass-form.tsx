"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedButton } from "./animated-button";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const formSchema = z.object({
  category: z.string({
    required_error: "Please select at least one category",
  }),
  budget: z.string({
    required_error: "Please select your monthly budget",
  }),
  teamSize: z.string({
    required_error: "Please select your dream team size",
  }),
  vision: z.string().min(10, {
    message: "Vision should be at least 10 characters",
  }),
  website: z.string().url({
    message: "Please enter a valid URL",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  otherDetails: z.string().optional(),
});

export function GlassForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      budget: "",
      teamSize: "",
      vision: "",
      website: "",
      name: "",
      email: "",
      otherDetails: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This would typically send the data to your API
    console.log(values);

    // In a real application, you would handle the API call here
    // For example:
    // const response = await fetch('/api/submit-form', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(values),
    // });

    // Reset the form after successful submission
    if (form.formState.isSubmitSuccessful) {
      form.reset();
    }
  }

  return (
    <div className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <p className="mb-2 text-[12px] px-2">What Services Do You Need?</p>
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full text-white border-none  bg-black/30 focus:ring-0">
                        <SelectValue placeholder="Choose one or many" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#011542]/20 backdrop-blur-xl border border-white/5 text-white">
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full text-white border-none bg-black/30 focus:ring-0">
                        <SelectValue placeholder="Your Monthly Budget" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#011542]/20 backdrop-blur-xl border border-white/5 text-white">
                      <SelectItem value="less5k">Less than $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                      <SelectItem value="more20k">More than $20,000</SelectItem>
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="teamSize"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full text-white border-none bg-black/30 focus:ring-0">
                        <SelectValue placeholder="Your Dream Team Size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#011542]/20 backdrop-blur-xl border border-white/5 text-white">
                      <SelectItem value="1-2">1-2 people</SelectItem>
                      <SelectItem value="3-5">3-5 people</SelectItem>
                      <SelectItem value="6-10">6-10 people</SelectItem>
                      <SelectItem value="more10">
                        More than 10 people
                      </SelectItem>
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )}
            />
          </div>

          <div>
            <div className="flex justify-between mb-2 text-[12px] px-2">
              <p>Share Your Growth Goals</p>
              <p className="text-white/30">* Optional but powerful</p>
            </div>
            <FormField
              control={form.control}
              name="vision"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your vision!"
                      className="resize-none text-white border-none bg-black/30  focus-visible:ring-0 focus-visible:border-[#0b50ea]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <p className="mb-2 text-[12px] px-2">Your Website</p>
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Drop Your Website link here"
                      className="text-white border-none bg-black/30 focus-visible:ring-0 focus-visible:border-[#0b50ea]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <p className="mb-2 text-[12px] px-2">Your Contact Info</p>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      className="text-white border-none bg-black/30 focus-visible:ring-0 focus-visible:border-[#0b50ea]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    className="text-white border-none bg-black/30 focus-visible:ring-0 focus-visible:border-[#0b50ea]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="otherDetails"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Other Details"
                    className="resize-none text-white border-none bg-black/30 focus-visible:ring-0 focus-visible:border-[#0b50ea]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <AnimatedButton
            type="submit"
            className="rounded-full w-full px-4 py-6 text-[#ffffff] hover:text-black font-medium"
            baseColor="bg-[#0B50EA]"
            endIcon={<ArrowRight className="ml-2 h-5 w-5" />}
          >
            Submit My Request
          </AnimatedButton>
        </form>
      </Form>
      <div>
        <Link
          href="/terms"
          className="text-sm text-white w-full hover:underline flex items-center gap-2 pt-5 justify-center"
        >
          <IoLogoWhatsapp className="text-white" size={20} /> Need a Quick Chat?
          Message Us on WhatsApp
        </Link>
      </div>
    </div>
  );
}
