import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  console.log("Form data:", formData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Here you would typically send the data to your backend
    toast({
      title: "Form submitted!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <Input
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          placeholder="Property Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>
      <div>
        <Textarea
          placeholder="Tell us about your property"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full"
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full">
        Get Your Cash Offer
      </Button>
    </form>
  );
};

export default ContactForm;