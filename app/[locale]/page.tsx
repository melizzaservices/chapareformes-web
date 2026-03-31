import Hero from "@/components/Hero";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = locale as "fr" | "es" | "en" | "ar";
  return (
    <>
      <Hero locale={validLocale} />
      {/* Otras secciones irían aquí */}
    </>
  );
}
