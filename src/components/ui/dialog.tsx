"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * z-index ölçeği (site geneli):
 *   film-grain 30 · StickyCTA 50 · header 60 · CookieBanner 70 · dialog 80
 * z-[100] kullanma — eski el yapımı modallardan kalan katman savaşını bitirdik.
 */

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-[80] bg-black/80 backdrop-blur-xl",
      "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    hideClose?: boolean;
  }
>(({ className, children, hideClose, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-[80] -translate-x-1/2 -translate-y-1/2",
        "w-[calc(100%-2rem)] max-w-lg max-h-[90dvh] flex flex-col",
        "bg-surface/90 border border-white/10 rounded-2xl shadow-[0_0_80px_rgba(212,164,74,0.15)]",
        "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 duration-300",
        className
      )}
      {...props}
    >
      {children}
      {!hideClose && (
        <DialogPrimitive.Close
          aria-label="Kapat"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/5 p-1.5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("font-body text-2xl font-bold text-foreground", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
};
