import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unitType: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mjkeqgyp");

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Inquiry Submitted Successfully!",
        description: "Thank you for your interest. Our team will contact you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", unitType: "", budget: "", message: "" });
      setIsSubmitting(false);
    }
  }, [state.succeeded, toast]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await handleSubmit(e);
    } finally {
      if (!state.succeeded) {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-light text-foreground mb-8 tracking-tight">
            Private Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            For discerning individuals seeking an exclusive residential experience, we invite you to arrange a private consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-playfair font-light text-foreground mb-8 tracking-wide">
              Exclusive Access
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4" data-testid="contact-phone">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 95608 02332</p>
                  <p className="text-muted-foreground">+91 9882544999</p>
                </div>
              </div>


              <div className="flex items-start space-x-4" data-testid="contact-address">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">33, Block, G- C, 122001, D,</p>
                  <p className="text-muted-foreground">S City Rd Number 1, Block G,</p>
                  <p className="text-muted-foreground">South City I, Sector 41,</p>
                  <p className="text-muted-foreground">Gurugram, Haryana 122007</p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="contact-hours">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                  <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 space-y-3">
              <Button 
                variant="outline"
                className="w-full font-light tracking-wide" 
                onClick={() => window.open('tel:+919882544999')}
                data-testid="button-call-now"
              >
                <Phone className="h-4 w-4 mr-2" />
                Schedule Call
              </Button>
              <Button 
                variant="ghost" 
                className="w-full font-light tracking-wide"
                onClick={() => window.open('https://wa.me/919882544999')}
                data-testid="button-whatsapp"
              >
                Private Message
              </Button>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair font-light tracking-wide">Request Information</CardTitle>
              </CardHeader>
              <CardContent>
                {state.succeeded ? (
                  <div className="p-6 text-center">
                    <p className="text-lg">Thanks for your inquiry! We will be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6">
                    <input type="hidden" name="unitType" value={formData.unitType} />
                    <input type="hidden" name="budget" value={formData.budget} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+91 9999-123-456"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        data-testid="input-email"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="unitType">Preferred Unit Type</Label>
                        <Select value={formData.unitType} onValueChange={(value) => handleInputChange("unitType", value)}>
                          <SelectTrigger data-testid="select-unit-type">
                            <SelectValue placeholder="Select unit type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3bhk">3 BHK + Utility</SelectItem>
                            <SelectItem value="4bhk">4 BHK + Utility</SelectItem>
                            <SelectItem value="4bhk-study">4 BHK + Study + Utility</SelectItem>
                            <SelectItem value="any">Open to Any</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger data-testid="select-budget">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5-8">₹5-8 Crores</SelectItem>
                            <SelectItem value="8-12">₹8-12 Crores</SelectItem>
                            <SelectItem value="12-15">₹12-15 Crores</SelectItem>
                            <SelectItem value="15+">₹15+ Crores</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements, preferred move-in date, or any specific questions..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        data-testid="textarea-message"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting || state.submitting}
                      data-testid="button-submit-inquiry"
                    >
                      {isSubmitting || state.submitting ? "Submitting..." : "Submit Inquiry"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}