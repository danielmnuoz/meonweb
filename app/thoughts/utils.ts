/**
 * Formats an ISO date string to a readable format
 * Example: "2025-12-21T14:30:00Z" -> "December 21st, 2025"
 */
export function formatDate(isoString: string): string {
  const date = new Date(isoString);

  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  // Add ordinal suffix (st, nd, rd, th)
  const ordinalSuffix = (day: number): string => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  return `${month} ${day}${ordinalSuffix(day)}, ${year}`;
}

/**
 * Formats an ISO date string to a short format (NYT style)
 * Example: "2025-12-21T14:30:00Z" -> "Dec. 21, 2025"
 */
export function formatDateShort(isoString: string): string {
  const date = new Date(isoString);

  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}. ${day}, ${year}`;
}
