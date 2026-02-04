import { useState } from "react";

export default function ReviewForm({ onAdd }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function submit(e) {
    e.preventDefault();
    onAdd({ id: Date.now(), name, message });
    setName("");
    setMessage("");
  }

  return (
    <form onSubmit={submit} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <input
        className="w-full mb-3 p-2 bg-slate-950 border border-slate-800 rounded"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <textarea
        className="w-full mb-3 p-2 bg-slate-950 border border-slate-800 rounded"
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
      />
      <button className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
