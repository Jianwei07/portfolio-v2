import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-16 text-center">
      <h2 className="text-4xl font-semibold mb-6">Contact Me</h2>
      <p className="text-gray-600 mb-4">
        Let`s connect! Feel free to reach out via email or LinkedIn.
      </p>
      <form className="flex flex-col gap-4">
        <Input placeholder="Your Name" className="p-3 border rounded-md" />
        <Input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-md"
        />
        <Textarea
          placeholder="Your Message"
          className="p-3 border rounded-md"
          rows={4}
        />
        <Button className="bg-black text-white hover:bg-gray-800">
          Send Message
        </Button>
      </form>
    </section>
  );
}
