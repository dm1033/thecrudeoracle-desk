export function producerSlug(name: string) {
  const aliases: Record<string, string> = {
    UAE: "uae",
    "United Arab Emirates": "uae",
    UK: "united-kingdom",
    "Eq. Guinea": "equatorial-guinea",
    Congo: "congo",
  };
  if (aliases[name]) return aliases[name];
  return name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
