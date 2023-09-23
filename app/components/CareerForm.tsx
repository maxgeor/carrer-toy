"use client"

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { careerSubmit } from "../actions";
import { careerSchema } from "../validations";

import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function CareerForm({ careers }: { careers: [string, string] }) {
  const form = useForm<z.infer<typeof careerSchema>>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      careers,
      reason: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(careerSubmit)();
        }}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="selectedCareer"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Which career would you rather do?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                  required
                >
                  {careers.map((career) => (
                    <FormItem
                      key={career}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={career} />
                      </FormControl>
                      <FormLabel className="font-normal">{career}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why?</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Because..."
                  className="w-full"
                  required
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-black rounded text-white">
          Submit
        </Button>
      </form>
    </Form>
  );
}
