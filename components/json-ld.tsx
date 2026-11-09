type JsonLdProps = {
  data: Record<string, unknown>;
};

/** Render structured data in the initial HTML so search crawlers can read it. */
export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
