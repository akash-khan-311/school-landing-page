"use client";
import { useForm } from "react-hook-form";
import { Mail, Phone } from "lucide-react";
import SectionTitle from "@/components/Shared/SectionTitle";
import { useTranslation } from "@/hooks/useTranslation";
import Container from "@/components/Shared/Container";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const { contactFormData } = useTranslation();
  const { name, email, phone, message, submitButton } =
    contactFormData.formField;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
    reset();
  };
  return (
    <Container>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionTitle
          title={contactFormData.title}
          subtitle={contactFormData.subTitle}
        />

        {/* Form */}
        <div className="space-y-4 mt-10">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <input
                type="text"
                placeholder={name.placeholder}
                {...register("name", { required: name.required })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-transparent transition"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                placeholder={email.placeholder}
                {...register("email", {
                  required: email.required,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: email.invalid,
                  },
                })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-transparent transition"
              />
              <Mail className="absolute right-3 top-3.5 w-5 h-5 text-emerald-500" />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Phone Field */}
          <div className="relative">
            <input
              type="tel"
              placeholder={phone?.placeholder}
              {...register("phone", { required: phone?.required })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-transparent transition"
            />
            <Phone className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              placeholder={message.placeholder}
              rows={6}
              {...register("message", { required: message.required })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-transparent transition resize-none"
            />
            <div className="absolute bottom-3 right-3 flex gap-2"></div>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit(onSubmit)}
            className="w-full cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30"
          >
            <Mail className="w-5 h-5" />
            {submitButton}
          </button>
        </div>
      </div>
    </Container>
  );
}
