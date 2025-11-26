import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";
import ReactTypingEffect from "react-typing-effect";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_u04wep3", // 👈 Replace with your service ID
        "template_6xmz1yg", // 👈 Replace with your template ID
        e.target,
        "w0E0s6lKeGp8qcglb" // 👈 Replace with your user/public key
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          e.target.reset();
          setIsSubmitting(false);
        },
        () => {
          toast({
            title: "Error",
            description: "Failed to send message.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center opacity-0 animate-fade-in">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <div className="opacity-0 animate-fade-in-delay-1">
          <ReactTypingEffect
            className="text-center text-lg md:text-xl text-muted-foreground font-medium mb-12"
            text={[
              "Let's build something great together.",
              "Got a project idea? Let's talk.",
              "I'm available for freelance or collaboration!",
            ]}
            speed={70}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={300}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 opacity-0 animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-gradient">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4 group p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 hover:scale-105">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 transition-transform duration-300 animate-float">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href="mailto:anirbanmadhu20@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    anirbanmadhu20@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 group p-4 rounded-lg hover:bg-secondary/5 transition-all duration-300 hover:scale-105">
                <div className="p-3 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a
                    href="tel:+918334934534"
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                  >
                    +91 8334934534
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 group p-4 rounded-lg hover:bg-accent/5 transition-all duration-300 hover:scale-105">
                <div className="p-3 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '1s' }}>
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/anirban-madhu-22a458245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary hover:to-secondary text-primary hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 hover:from-secondary hover:to-accent text-secondary hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/anirban.madhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 hover:from-accent hover:to-primary text-accent hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="gradient-border p-8 card-hover opacity-0 animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-gradient">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 group",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
