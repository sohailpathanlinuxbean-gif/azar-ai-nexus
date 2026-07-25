import { useEffect, useState } from "react";

export function Typewriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseMs = 1400,
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && sub === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && sub === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setSub((s) =>
            deleting ? current.substring(0, s.length - 1) : current.substring(0, s.length + 1),
          );
        },
        deleting ? deletingSpeed : typingSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [sub, deleting, index, words, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className="text-gradient">
      {sub}
      <span className="animate-blink text-cyan">|</span>
    </span>
  );
}
