"use client";

import { useEffect, useState } from "react";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  subscribe: z.boolean().optional(),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;
type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsSubmitted(false);
      }
    }
    if (isSubmitted) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSubmitted]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);
    setErrors({});

    const parsed = ContactFormSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: ContactFormErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Replace this with your submission logic (API call, email service, etc.)
      // For now, we just simulate a short delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsSubmitted(true);
      setValues({ name: "", email: "", message: "", subscribe: false });
    } catch {
      // Optionally handle submission errors
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form className="mt-10" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Smith"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name) || undefined}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@gmail.com"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email) || undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            placeholder="Hello!"
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message) || undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 md:flex-row md:justify-start">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-indigo-900 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-indigo-800 disabled:opacity-70 md:w-auto md:px-10 md:py-4"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
          {/* success modal rendered outside the form */}
        </div>
      </form>

      {isSubmitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsSubmitted(false)}
          aria-hidden="true"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
            className="relative w-full max-w-sm rounded-xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Close"
              onClick={() => setIsSubmitted(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <h2
              id="success-title"
              className="mb-2 text-lg font-semibold text-slate-900"
            >
              Message sent
            </h2>
            <p className="text-sm text-slate-600">Message sent successfully.</p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="rounded-full bg-indigo-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
