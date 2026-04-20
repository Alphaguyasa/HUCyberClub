"use client";

import { useState } from "react";
import { Spectral } from "next/font/google";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/interfaces-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

export default function BlogManagement() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImagePreview(URL.createObjectURL(file));
  }

  function handleReset() {
    setImagePreview(null);
  }

  return (
    <section id="blog-management" className={`w-full py-20 px-6 ${spectral.className}`} style={{ backgroundColor: "#25292E" }}>
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="mb-4 font-light" style={{ fontSize: "36px", color: "#F6F8FA" }}>Blog Management</h2>
          <p className="font-light" style={{ fontSize: "18px", color: "rgba(246,248,250,0.6)" }}>
            Create blog posts for the Blogs page
          </p>
        </div>

        <div className="w-full rounded-3xl border bg-background p-6 shadow-sm md:p-8">
          <FieldGroup>
            <FieldSet>
              <div>
                <FieldLegend>Post Details</FieldLegend>
                <FieldDescription>Fill in the information for the new blog post</FieldDescription>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="title">Title</FieldLabel>
                  <FieldContent>
                    <Input id="title" placeholder="Post title" />
                  </FieldContent>
                </Field>

                <Field>
                  <FieldLabel htmlFor="category">Category</FieldLabel>
                  <FieldContent>
                    <Input id="category" placeholder="e.g. Recent Articles" />
                  </FieldContent>
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="subtitle">Subtitle</FieldLabel>
                <FieldContent>
                  <Input id="subtitle" placeholder="Short description" />
                  <FieldDescription>A brief summary shown on the blog listing page</FieldDescription>
                </FieldContent>
              </Field>
            </FieldSet>

            <FieldSeparator />

            <FieldSet>
              <div>
                <FieldLegend>Content & Media</FieldLegend>
                <FieldDescription>Add the body content and cover image for the post</FieldDescription>
              </div>

              <Field>
                <FieldLabel htmlFor="body">Body</FieldLabel>
                <FieldContent>
                  <Textarea id="body" placeholder="Write the blog content here..." className="min-h-36 resize-none" />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="image">Cover Image</FieldLabel>
                <FieldContent>
                  <label
                    className="flex flex-col items-center justify-center w-full cursor-pointer rounded-md border border-dashed transition-opacity hover:opacity-80"
                    style={{ minHeight: "140px" }}
                  >
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="w-full object-cover rounded-md" style={{ maxHeight: "200px" }} />
                    ) : (
                      <div className="flex flex-col items-center gap-2 py-8">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#C9C73C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <polyline points="17 8 12 3 7 8" stroke="#C9C73C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="12" y1="3" x2="12" y2="15" stroke="#C9C73C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm font-medium text-muted-foreground">Click to upload image</span>
                        <span className="text-xs text-muted-foreground">PNG, JPG, WEBP</span>
                      </div>
                    )}
                    <input id="image" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                  </label>
                  {imagePreview && (
                    <button type="button" onClick={() => setImagePreview(null)} className="text-xs text-muted-foreground transition-opacity hover:opacity-70 mt-1">
                      Remove image
                    </button>
                  )}
                </FieldContent>
              </Field>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  Publish Post
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex h-10 items-center justify-center rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Reset
                </button>
              </div>
            </FieldSet>
          </FieldGroup>
        </div>

      </div>
    </section>
  );
}
