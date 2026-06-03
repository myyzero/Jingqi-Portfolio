export function withAutoScrollBehavior<T>(fn: () => T): T {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  try {
    return fn();
  } finally {
    root.style.scrollBehavior = previous;
  }
}

