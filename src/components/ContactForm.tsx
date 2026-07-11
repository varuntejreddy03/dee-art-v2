import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { site, whatsappLink } from "@/data/site";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  propertyType: "Flat" | "Villa";
  bhk: string;
  message: string;
}

const bhkOptions = ["1", "2", "3", "4", "5"];

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { propertyType: "Flat", bhk: "2" },
  });

  const onSubmit = (data: FormValues) => {
    const msg = [
      `Hi Dee Art 👋, I'd like a consultation.`,
      ``,
      `———————————————`,
      `👤 *Name:* ${data.name}`,
      `📧 *Email:* ${data.email}`,
      `📞 *Phone:* ${data.phone}`,
      `🏠 *Property:* ${data.propertyType} — ${data.bhk} BHK`,
      `———————————————`,
      ``,
      `💬 *Message:*`,
      data.message,
    ].join("\n");

    window.open(whatsappLink(msg), "_blank", "noopener");
    toast.success("Opening WhatsApp", {
      description: "We'll continue the conversation there. Talk soon!",
    });
    reset();
  };

  const fieldClass =
    "w-full rounded-sm border border-input bg-background px-4 py-3.5 text-sm outline-none transition-all focus:border-terracotta focus:ring-2 focus:ring-terracotta/20";
  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className={fieldClass}
            placeholder="Your full name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={fieldClass}
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          className={fieldClass}
          placeholder="+91 ..."
          {...register("phone", { required: "Phone is required" })}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <span className={labelClass}>Property Type</span>
          <div className="flex gap-6 pt-1">
            {(["Flat", "Villa"] as const).map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  value={opt}
                  className="accent-terracotta"
                  {...register("propertyType")}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
        <div>
          <span className={labelClass}>Configuration (BHK)</span>
          <div className="flex flex-wrap gap-4 pt-1">
            {bhkOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-1.5 text-sm">
                <input
                  type="radio"
                  value={opt}
                  className="accent-terracotta"
                  {...register("bhk")}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className={fieldClass}
          placeholder="Tell us about your space and requirements..."
          {...register("message", { required: "Please add a short message" })}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-terracotta px-6 py-3.5 text-sm font-medium text-terracotta-foreground transition-colors hover:bg-terracotta/90 sm:w-auto"
      >
        Send via WhatsApp
      </button>
      <p className="text-xs text-muted-foreground">
        Prefer email? Write to{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-terracotta hover:underline"
        >
          {site.email}
        </a>
      </p>
    </form>
  );
}
