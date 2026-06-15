import { useEffect, useMemo, useState } from "react";

export type BilibiliEmbedMode = "hero-background" | "interactive";

export function isBilibiliPlayerUrl(url: string | undefined): boolean {
  return Boolean(url?.includes("player.bilibili.com"));
}

export function normalizeMediaUrl(url: string): string {
  if (url.startsWith("//")) return `https:${url}`;
  return url;
}

function parseBilibiliPlayerUrl(url: string): URL | null {
  try {
    const parsed = new URL(normalizeMediaUrl(url));
    if (!parsed.hostname.includes("player.bilibili.com")) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Apply Bilibili player query params for HD / autoplay / mute / loop behaviour. */
export function buildBilibiliEmbedUrl(
  url: string,
  mode: BilibiliEmbedMode,
): string {
  const parsed = parseBilibiliPlayerUrl(url);
  if (!parsed) return normalizeMediaUrl(url);

  parsed.searchParams.set("high_quality", "1");
  parsed.searchParams.set("danmaku", "0");
  parsed.searchParams.set("autoplay", "1");

  if (mode === "hero-background") {
    parsed.searchParams.set("muted", "1");
    parsed.searchParams.set("loop", "1");
  } else {
    parsed.searchParams.delete("muted");
    parsed.searchParams.delete("loop");
  }

  return parsed.toString();
}

function isBilibiliEndedMessage(data: unknown): boolean {
  if (!data || typeof data !== "object") return false;
  const eventName =
    "event" in data && typeof (data as { event?: unknown }).event === "string"
      ? (data as { event: string }).event.toLowerCase()
      : "";
  return eventName.includes("ended");
}

type BilibiliEmbedIframeProps = {
  url: string;
  mode: BilibiliEmbedMode;
  title: string;
  className?: string;
};

export function BilibiliEmbedIframe({
  url,
  mode,
  title,
  className,
}: BilibiliEmbedIframeProps) {
  const embedSrc = useMemo(
    () => buildBilibiliEmbedUrl(url, mode),
    [url, mode],
  );
  const [iframeSrc, setIframeSrc] = useState(embedSrc);

  useEffect(() => {
    setIframeSrc(embedSrc);
  }, [embedSrc]);

  useEffect(() => {
    if (mode !== "hero-background") return;

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://player.bilibili.com") return;
      if (!isBilibiliEndedMessage(event.data)) return;

      const separator = embedSrc.includes("?") ? "&" : "?";
      setIframeSrc(`${embedSrc}${separator}_loop=${Date.now()}`);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [embedSrc, mode]);

  return (
    <iframe
      src={iframeSrc}
      title={title}
      className={className}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
