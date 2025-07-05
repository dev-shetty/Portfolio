import {
  type FormEvent,
  useState,
  type ChangeEvent,
  useEffect,
  useRef,
} from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import Loading from "@/components/ui/loading/loading";
import Button from "@/components/ui/button";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email");
    const name = formData.get("name");
    const message = formData.get("message");

    if (!email || !name || !message) {
      return toast({
        variant: "destructive",
        title: "Please fill the fields",
        duration: 5000,
      });
    }

    try {
      setLoading(true);
      const response = await axios("/api/mail", {
        method: "POST",
        data: formData,
      });

      if (response.data.success) {
        toast({
          variant: "success",
          title: "Received your mail, I will reply back soon ✨",
          duration: 5000,
        });
        console.log("[SUCCESS] Mail sent by: ", email);
        formRef.current?.reset();
      } else {
        console.log("[ERROR] Send Mail API Response: ", response.data);
        return toast({
          variant: "destructive",
          title: "Sorry, couldn't send the mail",
          duration: 5000,
        });
      }
    } catch (error) {
      console.log("[ERROR] Send Mail API: ", error);
      return toast({
        variant: "destructive",
        title: "Sorry, couldn't send the mail",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="flex flex-col w-full gap-4 justify-between"
      method="post"
      ref={formRef}
      onSubmit={handleFormSubmit}
    >
      <div className="flex flex-col gap-1 justify-between">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-800 rounded-md p-2 outline-gray-700"
          placeholder="developer@domain.com"
        />
      </div>
      <div className="flex flex-col gap-1 justify-between">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-gray-800 rounded-md p-2 outline-gray-700"
          placeholder="Developer X"
        />
      </div>
      <div className="flex flex-col gap-1 justify-between">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="What's up?"
          className="bg-gray-800 rounded-md p-2 outline-gray-700 resize-none"
          rows={6}
        ></textarea>
      </div>
      <div className="mx-auto mt-2">
        <Button
          type="submit"
          disabled={loading}
          className="relative w-fit h-10"
        >
          <span>{loading ? <Loading /> : "Send"}</span>
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
