"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import AdminNavbar from "@/components/admin-navbar";
import { Component as Footer } from "@/components/footer-taped-design";
import { Spectral } from "next/font/google";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const steps = [
  { id: "basics", title: "Challenge Info" },
  { id: "difficulty", title: "Difficulty & Points" },
  { id: "files", title: "Files & Hints" },
  { id: "flag", title: "Flag & Answer" },
  { id: "publish", title: "Publish" },
];

interface FormData {
  name: string;
  description: string;
  category: string;
  difficulty: string;
  points: string;
  timeLimit: string;
  hints: string;
  fileDescription: string;
  flag: string;
  flagFormat: string;
  status: string;
}

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

export default function CreateChallengePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "", description: "", category: "", difficulty: "",
    points: "", timeLimit: "", hints: "", fileDescription: "",
    flag: "", flagFormat: "", status: "draft",
  });

  const update = (field: keyof FormData, value: string) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return formData.name.trim() !== "";
      case 1: return formData.difficulty !== "";
      case 2: return true;
      case 3: return formData.flag.trim() !== "";
      default: return true;
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setSubmitted(true); }, 1500);
  };

  const reset = () => {
    setSubmitted(false);
    setCurrentStep(0);
    setFormData({ name: "", description: "", category: "", difficulty: "", points: "", timeLimit: "", hints: "", fileDescription: "", flag: "", flagFormat: "", status: "draft" });
  };

  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <AdminNavbar activeItem="CTF Management" transparent={false} />

      <div className="pt-28 pb-20 px-6 max-w-2xl mx-auto">
        <div className="mb-10">
          <h1 className="font-light mb-2" style={{ fontSize: '36px', color: '#F6F8FA' }}>Create CTF Challenge</h1>
          <p className="font-light" style={{ fontSize: '18px', color: 'rgba(246,248,250,0.6)' }}>Design a new challenge for club members</p>
        </div>

        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-card rounded-3xl border border-border/30 p-10">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Challenge Created!</h2>
            <p className="text-muted-foreground mb-6">"{formData.name}" has been {formData.status === "published" ? "published" : "saved as draft"}.</p>
            <div className="flex gap-3 justify-center">
              <button onClick={reset} className="px-6 py-2 rounded-2xl font-medium text-white" style={{ backgroundColor: '#111111' }}>Create Another</button>
              <button onClick={() => window.location.href = '/admin'} className="px-6 py-2 rounded-2xl font-medium border border-border text-foreground">Back to Dashboard</button>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={cn("w-4 h-4 rounded-full cursor-pointer transition-colors duration-300",
                        index < currentStep ? "bg-primary" : index === currentStep ? "bg-primary ring-4 ring-primary/20" : "bg-muted"
                      )}
                      onClick={() => { if (index <= currentStep) setCurrentStep(index); }}
                    />
                    <span className={cn("text-xs mt-1.5 hidden sm:block", index === currentStep ? "text-primary font-medium" : "text-muted-foreground")}>
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden mt-2">
                <motion.div className="h-full bg-primary" initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.3 }} />
              </div>
            </div>

            {/* Card */}
            <div className="border shadow-md rounded-3xl overflow-hidden bg-card">

              {/* Animated Step Content */}
              <AnimatePresence mode="wait">
                <motion.div key={currentStep} initial="hidden" animate="visible" exit="exit" variants={contentVariants}>

                  {currentStep === 0 && (
                    <div className="p-6 space-y-4">
                      <div><h2 className="text-xl font-semibold text-foreground">Challenge Information</h2><p className="text-sm text-muted-foreground">Enter the basic details of your CTF challenge</p></div>
                      <div className="space-y-2"><Label htmlFor="name">Challenge Name</Label><Input id="name" placeholder="e.g. SQL Injection Basics" value={formData.name} onChange={e => update("name", e.target.value)} /></div>
                      <div className="space-y-2"><Label htmlFor="description">Description</Label><Textarea id="description" placeholder="Describe the challenge..." value={formData.description} onChange={e => update("description", e.target.value)} className="min-h-[100px]" /></div>
                      <div className="space-y-2">
                        <Label>Category</Label>
                        <Select value={formData.category} onValueChange={v => update("category", v)}>
                          <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web">Web Exploitation</SelectItem>
                            <SelectItem value="crypto">Cryptography</SelectItem>
                            <SelectItem value="forensics">Forensics</SelectItem>
                            <SelectItem value="reverse">Reverse Engineering</SelectItem>
                            <SelectItem value="pwn">Binary Exploitation</SelectItem>
                            <SelectItem value="osint">OSINT</SelectItem>
                            <SelectItem value="misc">Miscellaneous</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="p-6 space-y-4">
                      <div><h2 className="text-xl font-semibold text-foreground">Difficulty & Points</h2><p className="text-sm text-muted-foreground">Set the challenge difficulty and scoring</p></div>
                      <div className="space-y-2">
                        <Label>Difficulty Level</Label>
                        <RadioGroup value={formData.difficulty} onValueChange={v => update("difficulty", v)} className="space-y-2">
                          {[
                            { value: "easy", label: "Easy", color: "text-green-500", desc: "Beginner friendly" },
                            { value: "medium", label: "Medium", color: "text-yellow-500", desc: "Some experience required" },
                            { value: "hard", label: "Hard", color: "text-red-500", desc: "Advanced skills needed" },
                          ].map((d, i) => (
                            <div key={d.value} className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-accent transition-colors">
                              <RadioGroupItem value={d.value} id={`diff-${i}`} />
                              <Label htmlFor={`diff-${i}`} className="cursor-pointer w-full flex justify-between">
                                <span className={d.color + " font-semibold"}>{d.label}</span>
                                <span className="text-muted-foreground text-sm">{d.desc}</span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                      <div className="space-y-2"><Label htmlFor="points">Point Value</Label><Input id="points" type="number" placeholder="e.g. 100" value={formData.points} onChange={e => update("points", e.target.value)} /></div>
                      <div className="space-y-2"><Label htmlFor="timeLimit">Time Limit (minutes, optional)</Label><Input id="timeLimit" type="number" placeholder="Leave empty for no limit" value={formData.timeLimit} onChange={e => update("timeLimit", e.target.value)} /></div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="p-6 space-y-4">
                      <div><h2 className="text-xl font-semibold text-foreground">Files & Hints</h2><p className="text-sm text-muted-foreground">Upload challenge files and add hints</p></div>
                      <div className="space-y-2">
                        <Label>Challenge Files</Label>
                        <div className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:bg-accent/50 transition-colors">
                          <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Drag & drop files or click to upload</p>
                          <p className="text-xs text-muted-foreground mt-1">ZIP, PDF, PNG, or any challenge file</p>
                        </div>
                      </div>
                      <div className="space-y-2"><Label htmlFor="fileDescription">File Description (optional)</Label><Input id="fileDescription" placeholder="Describe what the files contain" value={formData.fileDescription} onChange={e => update("fileDescription", e.target.value)} /></div>
                      <div className="space-y-2"><Label htmlFor="hints">Hints (optional)</Label><Textarea id="hints" placeholder="Add hints separated by new lines..." value={formData.hints} onChange={e => update("hints", e.target.value)} className="min-h-[100px]" /></div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="p-6 space-y-4">
                      <div><h2 className="text-xl font-semibold text-foreground">Flag & Answer</h2><p className="text-sm text-muted-foreground">Set the correct flag members need to find</p></div>
                      <div className="space-y-2">
                        <Label>Flag Format</Label>
                        <Select value={formData.flagFormat} onValueChange={v => update("flagFormat", v)}>
                          <SelectTrigger><SelectValue placeholder="Select flag format" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hucc">HUCC{"{flag}"}</SelectItem>
                            <SelectItem value="ctf">CTF{"{flag}"}</SelectItem>
                            <SelectItem value="flag">flag{"{flag}"}</SelectItem>
                            <SelectItem value="custom">Custom format</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="flag">Flag (Answer)</Label>
                        <Input id="flag" placeholder="e.g. HUCC{s3cur1ty_1s_k3y}" value={formData.flag} onChange={e => update("flag", e.target.value)} className="font-mono" />
                        <p className="text-xs text-muted-foreground">Exact string members must submit to solve the challenge.</p>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="p-6 space-y-4">
                      <div><h2 className="text-xl font-semibold text-foreground">Publish Challenge</h2><p className="text-sm text-muted-foreground">Review and publish your challenge</p></div>
                      <div className="bg-muted/40 rounded-xl p-4 space-y-2 border border-border/30">
                        <h3 className="font-semibold text-foreground">Summary</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-muted-foreground">Name:</span><span className="text-foreground font-medium">{formData.name || "—"}</span>
                          <span className="text-muted-foreground">Category:</span><span className="text-foreground capitalize">{formData.category || "—"}</span>
                          <span className="text-muted-foreground">Difficulty:</span><span className={cn("capitalize font-medium", formData.difficulty === "easy" ? "text-green-500" : formData.difficulty === "medium" ? "text-yellow-500" : "text-red-500")}>{formData.difficulty || "—"}</span>
                          <span className="text-muted-foreground">Points:</span><span className="text-foreground">{formData.points || "—"}</span>
                          <span className="text-muted-foreground">Time Limit:</span><span className="text-foreground">{formData.timeLimit ? `${formData.timeLimit} min` : "No limit"}</span>
                          <span className="text-muted-foreground">Flag:</span><span className="text-foreground font-mono text-xs">{formData.flag || "—"}</span>
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

              {/* Footer - OUTSIDE AnimatePresence */}
              <div className="flex justify-between px-6 py-4 border-t border-border/30" style={{ position: 'relative', zIndex: 200 }}>
                <button
                  type="button"
                  onClick={() => setCurrentStep(p => Math.max(0, p - 1))}
                  disabled={currentStep === 0}
                  className="flex items-center gap-1 px-4 py-2 rounded-2xl border border-border text-foreground font-medium disabled:opacity-30 hover:bg-accent transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (currentStep === steps.length - 1) {
                      handleSubmit();
                    } else {
                      setCurrentStep(prev => prev + 1);
                    }
                  }}
                  disabled={isSubmitting}
                  className="flex items-center gap-1 px-4 py-2 rounded-2xl font-medium text-white transition-colors"
                  style={{ backgroundColor: '#C9C73C', color: '#111111' }}
                >
                  {isSubmitting ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Saving...</>
                  ) : currentStep === steps.length - 1 ? (
                    <>{formData.status === "published" ? "Publish" : "Save Draft"} <Check className="h-4 w-4" /></>
                  ) : (
                    <>Next <ChevronRight className="h-4 w-4" /></>
                  )}
                </button>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
            </p>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
