// components/ContactForm.jsx
import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Card from "./ui/Card";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(null);
  const [err, setErr] = useState(null);

  async function onSubmit(e){
    e.preventDefault();
    setLoading(true); setOk(null); setErr(null);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      // burda backendə POST edərsən
      await new Promise(r=>setTimeout(r,800)); // demo
      setOk("Mesaj göndərildi. Tezliklə cavab verəcəyəm.");
      e.currentTarget.reset();
    } catch {
      setErr("Göndərmək alınmadı. Zəhmət olmasa bir az sonra yenə cəhd et.");
    } finally { setLoading(false); }
  }

  return (
    <Card className="p-5">
      {ok && <div className="mb-3 rounded-lg bg-green-50 text-green-700 px-3 py-2 text-sm">{ok}</div>}
      {err && <div className="mb-3 rounded-lg bg-red-50 text-red-700 px-3 py-2 text-sm">{err}</div>}

      <form className="space-y-4" onSubmit={onSubmit} aria-label="Contact form">
        <div>
          <label htmlFor="name" className="block text-xs text-slate-500 mb-1">Name</label>
          <Input id="name" name="name" autoComplete="name" required placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs text-slate-500 mb-1">Email</label>
          <Input id="email" name="email" type="email" autoComplete="email" required placeholder="you@mail.com" />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs text-slate-500 mb-1">Message</label>
          <textarea
            id="message" name="message" rows={4} required
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
            placeholder="Tell me about your project..."
          />
        </div>
        <Button type="submit" disabled={loading} className="w-full md:w-auto">
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </Card>
  );
}
