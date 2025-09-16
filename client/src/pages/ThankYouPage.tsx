import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ThankYouPage() {
  return (
    <section className="py-24 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-playfair font-light tracking-tight mb-6">
          Thank you for your inquiry
        </h1>
        <p className="text-muted-foreground mb-10">
          Our team will get in touch with you shortly. If your request is urgent, feel free to call us directly.
        </p>
        <Link href="/">
          <Button size="lg">Back to Home</Button>
        </Link>
      </div>
    </section>
  );
} 