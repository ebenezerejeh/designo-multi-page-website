"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import { contactSchema, type ContactFormData } from "./schema";

export function ContactHero() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(_: ContactFormData) {
    toast.success("Message sent! We'll be in touch soon.");
    reset();
  }

  return (
    <section className="mx-auto max-w-[1110px] px-6 lg:px-0">
      <div className="relative rounded-[15px] bg-peach overflow-hidden flex flex-col lg:flex-row">
        {/* Decorative pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/contact/desktop/bg-pattern-hero-desktop.svg"
            alt=""
            fill
            className="object-cover object-left-bottom"
          />
        </div>

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-16 text-center lg:text-left lg:pl-[95px] lg:w-[45%] lg:py-[72px]">
          <h1 className="text-white text-[36px] leading-[44px] font-medium lg:text-[48px] lg:leading-[48px] mb-6">
            Contact Us
          </h1>
          <p className="text-white/80 text-[16px] leading-[26px] max-w-[458px] mx-auto lg:mx-0">
            Ready to take it to the next level? Let&apos;s talk about your
            project or idea and find out how we can help your business grow. If
            you are looking for unique digital experiences that&apos;s relatable
            to your users, drop us a line.
          </p>
        </div>

        {/* Form */}
        <div className="relative z-10 flex-1 px-8 pb-16 lg:pl-[95px] lg:pr-[95px] lg:py-[72px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-6"
          >
            <Input
              placeholder="Name"
              {...register("name")}
              error={errors.name?.message}
            />
            <Input
              type="email"
              placeholder="Email Address"
              {...register("email")}
              error={errors.email?.message}
            />
            <Input
              type="tel"
              placeholder="Phone"
              {...register("phone")}
              error={errors.phone?.message}
            />
            <Textarea
              placeholder="Your Message"
              rows={4}
              {...register("message")}
              error={errors.message?.message}
            />
            <div className="flex justify-center lg:justify-end">
              <button
                type="submit"
                className={cn(buttonVariants({ variant: "white" }))}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
