"use client";

import { useState, type FormEvent } from "react";

type ApiResponse = {
  success: boolean;
  message: string;
  data?: {
    phone_number: string;
    message: string;
  };
  errors?: Record<string, string>;
};

type SubmissionState = "idle" | "success" | "error";

export default function ApiTester() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [apiResult, setApiResult] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setApiResult(null);
    setSubmissionState("idle");

    try {
      const response = await fetch("http://127.0.0.1:5000/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          phone_number: phoneNumber.trim(),
          message: message.trim(),
        }),
      });

      const data = (await response.json()) as ApiResponse;
      setApiResult(data);
      setSubmissionState(response.ok ? "success" : "error");
    } catch {
      setApiResult({
        success: false,
        message: "Unable to connect to the Flask backend. Make sure it is running on port 5000.",
      });
      setSubmissionState("error");
    } finally {
      setLoading(false);
    }
  }

  const responsePanelClass =
    submissionState === "success"
      ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-50"
      : submissionState === "error"
        ? "border-rose-400/30 bg-rose-500/10 text-rose-50"
        : "border-white/10 bg-slate-950/60 text-slate-200";

  const statusBadgeClass =
    loading
      ? "bg-amber-500/15 text-amber-100 ring-1 ring-amber-400/20"
      : submissionState === "success"
        ? "bg-emerald-500/15 text-emerald-100 ring-1 ring-emerald-400/20"
        : submissionState === "error"
          ? "bg-rose-500/15 text-rose-100 ring-1 ring-rose-400/20"
          : "bg-slate-500/15 text-slate-200 ring-1 ring-white/10";

  const statusLabel = loading
    ? "Sending..."
    : submissionState === "success"
      ? "Success"
      : submissionState === "error"
        ? "Error"
        : "Idle";

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-slate-950/20">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-300">Flask Validation API</p>
          <h2 className="text-xl font-semibold text-white">Test the endpoint</h2>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusBadgeClass}`}>
          {statusLabel}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="phone_number" className="text-sm font-medium text-slate-200">
            Phone number
          </label>
          <input
            id="phone_number"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            placeholder="9876543210"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/20"
            required
          />
          <p className="text-xs text-slate-400">
            Must be 10 digits and start with 6, 7, 8, or 9.
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-200">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Hello, this is a test"
            rows={4}
            className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/20"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-950/30 transition hover:from-sky-400 hover:to-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending to Flask..." : "Submit to API"}
        </button>
      </form>

      <div className={`mt-5 rounded-3xl border p-4 ${responsePanelClass}`} aria-live="polite">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold">API response</p>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-inherit">
            {apiResult ? (apiResult.success ? "Validated" : "Rejected") : "Waiting"}
          </span>
        </div>

        {apiResult ? (
          <pre className="mt-4 overflow-x-auto whitespace-pre-wrap break-words rounded-2xl bg-slate-950/70 p-4 text-xs leading-6 text-slate-100">
            {JSON.stringify(apiResult, null, 2)}
          </pre>
        ) : (
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Submit the form to see the structured JSON response from Flask appear here.
          </p>
        )}
      </div>
    </div>
  );
}