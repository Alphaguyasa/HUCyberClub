"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2, Calendar, MapPin, Users, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import AdminNavbar from "@/components/admin-navbar";
import { Component as Footer } from "@/components/footer-taped-design";
import { Spectral } from "next/font/google";
const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const steps = [
  { id: "details", title: "Event Details" },
  { id: "schedule", title: "Schedule" },
  { id: "participants", title: "Participants" },
  { id: "publish", title: "Publish" },
];

interface FormData {
  title: string; description: string; type: string; location: string;
  date: string; time: string; duration: string; maxParticipants: string;
  registrationDeadline: string; prerequisites: string; status: string;
  image: string;
}

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

export default function CreateEventPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: "", description: "", type: "", location: "",
    date: "", time: "", duration: "", maxParticipants: "",
    registrationDeadline: "", prerequisites: "", status: "draft", image: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setSubmitted(true); }, 1500);
  };

  const reset = () => {
    setSubmitted(false);
    setCurrentStep(0);
    setFormData({ title: "", description: "", type: "", location: "", date: "", time: "", duration: "", maxParticipants: "", registrationDeadline: "", prerequisites: "", status: "draft", image: "" });
  };

  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <AdminNavbar activeItem="Event Management" transparent={false} />
      <div className="pt-28 pb-20 px-6 max-w-2xl mx-auto">
        <div className="mb-10">
          <h1 className="font-light mb-2" style={{ fontSize: '36px', color: '#F6F8FA' }}>Create Event</h1>
          <p className="font-light" style={{ fontSize: '18px', color: 'rgba(246,248,250,0.6)' }}>Plan a new event for club members</p>
        </div>

        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-card rounded-3xl border border-border/30 p-10">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Event Created!</h2>
            <p className="text-muted-foreground mb-6">"{formData.title}" has been {formData.status === "published" ? "published" : "saved as draft"}.</p>
            <div className="flex gap-3 justify-center">
              <button onClick={reset} className="px-6 py-2 rounded-2xl font-medium text-white" style={{ backgroundColor: '#111111' }}>Create Another</button>
              <button onClick={() => window.location.href = '/admin'} className="px-6 py-2 rounded-2xl font-medium border border-border text-foreground">Back to Dashboard</button>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={cn("w-4 h-4 rounded-full cursor-pointer transition-colors duration-300",
                      index < currentStep ? "bg-primary" : index === currentStep ? "bg-primary ring-4 ring-primary/20" : "bg-muted"
                    )} onClick={() => { if (index <= currentStep) setCurrentStep(index); }} />
                    <span className={cn("text-xs mt-1.5 hidden sm:block", index === currentStep ? "text-primary font-medium" : "text-muted-foreground")}>{step.title}</span>
                  </div>
                ))}
              </div>
              <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden mt-2">
                <motion.div className="h-full bg-primary" initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }} transition={{ duration: 0.3 }} />
              </div>
            </div>

            <div className="border shadow-md rounded-3xl overflow-hidden bg-card">
              <AnimatePresence mode="wait">
                <motion.div key={currentStep} initial="hidden" animate="visible" exit="exit" variants={contentVariants}>

                  {currentStep === 0 && (
                    <div className="p-6 space-y-4">
                      <div><h2 className="text-xl font-semibold text-foreground">Event Details</h2><p className="text-sm text-muted-foreground">Enter the basic information about the event</p></div>
                      <div className="space-y-2"><Label>Event Title</Label><Input placeholder="e.g. Ethical Hacking Workshop" value={formData.title} onChange={e => update("title", e.target.value)} /></div>
                      <div className="space-y-2"><Label>Description</Label><Textarea placeholder="Describe the event..." value={formData.description} onChange={e => update("description", e.target.value)} className="min-h-[100px]" /></div>
                      <div className="space-y-2">
                        <Label>Event Type</Label>
                        <Select value={formData.type} onValueChange={v => update("type", v)}>
                          <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="workshop">Workshop</SelectItem>
                            <SelectItem value="ctf">CTF Competition</SelectItem>
                            <SelectItem value="seminar">Seminar</SelectItem>
                            <SelectItem value="hackathon">Hackathon</SelectItem>
                            <SelectItem value="meetup">Meetup</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2"><Label className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Location</Label><Input placeholder="e.g. Computer Lab 3, Haramaya University" value={formData.location} onChange={e => update("location", e.target.value)} /></div>
                      <div className="space-y-2">
                        <Label>Event Banner Image</Label>
                        <div className="border-2 border-dashed border-border rounded-xl overflow-hidden cursor-pointer hover:bg-accent/50 transition-colors">
                          {formData.image ? (
                            <div className="relative">
                              <img src={formData.image} alt="Preview" className="w-full h-48 object-cover" />
                              <button type="button" onClick={() => update("image", "")}
                                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                              </button>
                            </div>
                          ) : (
                            <label className="flex flex-col items-center justify-center p-8 cursor-pointer">
                              <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                              <p className="text-sm text-muted-foreground">Click to upload event banner</p>
                              <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
                              <input type="file" accept="image/*" className="hidden"
                                onChange={e => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const reader = new FileReader();
                                    reader.onload = ev => update("image", ev.target?.result as string);
                                    reader.readAsDataURL(file);
                                  }
                                }} />
                            </label>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Event Banner Image</Label>
                        <div className="border-2 border-dashed border-border rounded-xl overflow-hidden cursor-pointer hover:bg-accent/50 transition-colors">
                          {formData.image ? (
                            <div className="relative">
                              <img src={formData.image} alt="Preview" className="w-full h-48 object-cover" />
                              <button type="button" onClick={() => update("image", "")}
                                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                              </button>
                            </div>
                          ) : (
                            <label className="flex flex-col items-center justify-center p-8 cursor-pointer">
                              <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                              <p className="text-sm text-muted-foreground">Click to upload event banner</p>
                              <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
                              <input type="file" accept="image/*" className="hidden"
                                onChange={e => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const reader = new FileReader();
                                    reader.onload = ev => update("image", ev.target?.result as string);
                                    reader.readAsDataURL(file);
                                  }
                                }} />
                            </label>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="p-6 space-y-4">
                      <div><h2 className="text-xl font-semibold text-foreground">Schedule</h2><p className="text-sm text-muted-foreground">Set the date and time for the event</p></div>
                      <div className="space-y-2"><Label className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Event Date</Label><Input type="date" value={formData.date} onChange={e => update("date", e.target.value)} /></div>
                      <div className="space-y-2"><Label>Start Time</Label><Input type="time" value={formData.time} onChange={e => update("time", e.target.value)} /></div>
                      <div className="space-y-2">
                        <Label>Duration</Label>
                        <Select value={formData.duration} onValueChange={v => update("duration", v)}>
                          <SelectTrigger><SelectValue placeholder="Select duration" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1h">1 Hour</SelectItem>
                            <SelectItem value="2h">2 Hours</SelectItem>
                            <SelectItem value="3h">3 Hours</SelectItem>
                            <SelectItem value="halfday">Half Day</SelectItem>
                            <SelectItem value="fullday">Full Day</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2"><Label>Registration Deadline</Label><Input type="date" value={formData.registrationDeadline} onChange={e => update("registrationDeadline", e.target.value)} /></div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="p-6 space-y-4">
                      <div><h2 className="text-xl font-semibold text-foreground">Participants</h2><p className="text-sm text-muted-foreground">Set participant limits and requirements</p></div>
                      <div className="space-y-2"><Label className="flex items-center gap-1"><Users className="w-3 h-3" /> Max Participants</Label><Input type="number" placeholder="e.g. 30 (leave empty for unlimited)" value={formData.maxParticipants} onChange={e => update("maxParticipants", e.target.value)} /></div>
                      <div className="space-y-2"><Label>Prerequisites (optional)</Label><Textarea placeholder="e.g. Basic knowledge of networking, Laptop required..." value={formData.prerequisites} onChange={e => update("prerequisites", e.target.value)} className="min-h-[100px]" /></div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="p-6 space-y-4">
                      <div><h2 className="text-xl font-semibold text-foreground">Publish Event</h2><p className="text-sm text-muted-foreground">Review and publish your event</p></div>
                      <div className="bg-muted/40 rounded-xl p-4 space-y-2 border border-border/30">
                        <h3 className="font-semibold text-foreground">Summary</h3>
                        {formData.image && <img src={formData.image} alt="Banner" className="w-full h-32 object-cover rounded-lg mb-2" />}
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-muted-foreground">Title:</span><span className="text-foreground font-medium">{formData.title || "—"}</span>
                          <span className="text-muted-foreground">Type:</span><span className="text-foreground capitalize">{formData.type || "—"}</span>
                          <span className="text-muted-foreground">Date:</span><span className="text-foreground">{formData.date || "—"}</span>
                          <span className="text-muted-foreground">Time:</span><span className="text-foreground">{formData.time || "—"}</span>
                          <span className="text-muted-foreground">Location:</span><span className="text-foreground">{formData.location || "—"}</span>
                          <span className="text-muted-foreground">Max Participants:</span><span className="text-foreground">{formData.maxParticipants || "Unlimited"}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Publish Status</Label>
                        <RadioGroup value={formData.status} onValueChange={v => update("status", v)} className="space-y-2">
                          {[
                            { value: "draft", label: "Save as Draft", desc: "Only visible to admins" },
                            { value: "published", label: "Publish Now", desc: "Visible to all members immediately" },
                          ].map((s, i) => (
                            <div key={s.value} className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-accent transition-colors">
                              <RadioGroupItem value={s.value} id={`status-${i}`} />
                              <Label htmlFor={`status-${i}`} className="cursor-pointer w-full flex justify-between">
                                <span className="font-medium">{s.label}</span>
                                <span className="text-muted-foreground text-sm">{s.desc}</span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between px-6 py-4 border-t border-border/30" style={{ position: 'relative', zIndex: 10 }}>
                <button type="button" onClick={() => setCurrentStep(p => Math.max(0, p - 1))} disabled={currentStep === 0}
                  className="flex items-center gap-1 px-4 py-2 rounded-2xl border border-border text-foreground font-medium disabled:opacity-30 hover:bg-accent transition-colors">
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
                <button type="button"
                  onClick={() => { if (currentStep === steps.length - 1) { handleSubmit(); } else { setCurrentStep(p => p + 1); } }}
                  disabled={isSubmitting}
                  className="flex items-center gap-1 px-4 py-2 rounded-2xl font-medium transition-colors"
                  style={{ backgroundColor: '#C9C73C', color: '#111111' }}>
                  {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Saving...</>
                    : currentStep === steps.length - 1 ? <>{formData.status === "published" ? "Publish" : "Save Draft"} <Check className="h-4 w-4" /></>
                    : <>Next <ChevronRight className="h-4 w-4" /></>}
                </button>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}</p>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
