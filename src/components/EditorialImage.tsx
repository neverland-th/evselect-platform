"use client";

import NextImage, { type ImageProps } from "next/image";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

// An explicit editorial placeholder avoids pretending an unrelated car is the subject.
export default function EditorialImage(props: ImageProps) {
  const source =
    typeof props.src === "string"
      ? props.src
      : "default" in props.src
        ? props.src.default.src
        : props.src.src;

  // Changing the source resets the error state without an effect or stale fallback.
  return <ImageWithFallback key={source} {...props} />;
}

function ImageWithFallback({ onError, unoptimized, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);
  const [serveOriginal, setServeOriginal] = useState(false);

  if (props.src !== "/images/editorial-placeholder.svg" && !failed) {
    return (
      <NextImage
        {...props}
        unoptimized={unoptimized || serveOriginal}
        onError={(event) => {
          if (!unoptimized && !serveOriginal) setServeOriginal(true);
          else setFailed(true);
          onError?.(event);
        }}
      />
    );
  }

  const message = failed
    ? "ไม่สามารถโหลดภาพประกอบได้"
    : "ภาพประกอบอยู่ระหว่างจัดเตรียม";
  return (
    <div
      role="img"
      aria-label={message}
      className={`${props.fill ? "absolute inset-0" : "w-full min-h-48"} flex flex-col items-center justify-center gap-3 bg-slate-100 text-slate-500 p-5 text-center`}
    >
      <ImageIcon className="w-8 h-8 text-slate-400" aria-hidden="true" />
      <span className="text-xs font-medium tracking-widest text-slate-700">
        EVSELECT
      </span>
      <span className="text-xs">{message}</span>
    </div>
  );
}
