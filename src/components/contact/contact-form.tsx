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
      className="flex flex-col w-full gap-4"
      method="post"
      ref={formRef}
      onSubmit={handleFormSubmit}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-800 rounded-md p-2 outline-gray-700"
            placeholder="developer@domain.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-800 rounded-md p-2 outline-gray-700"
            placeholder="Developer X"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-[80%]">
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="What's up?"
            className="w-full bg-gray-800 rounded-md p-2 outline-gray-700 resize-none"
            rows={3}
          ></textarea>
        </div>
        <div className="w-[20%] mt-auto mb-2">
          <Button
            type="submit"
            disabled={loading}
            className="md:w-full w-full h-21 cursor-pointer"
          >
            <span>{loading ? <Loading /> : "Send"}</span>
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
