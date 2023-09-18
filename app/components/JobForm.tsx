"use client"

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { jobSubmit } from "../actions";
import { jobSchema } from "../validations";

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

export function JobForm({ jobs }: { jobs: [string, string] }) {
  const form = useForm<z.infer<typeof jobSchema>>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      jobs,
      reason: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(jobSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="selectedJob"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Which job would you rather do?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                  required
                >
                  {jobs.map((job) => (
                    <FormItem
                      key={job}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={job} />
                      </FormControl>
                      <FormLabel className="font-normal">{job}</FormLabel>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
