import Hero from "@/components/Hero";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <Hero locale={locale as any} />
      {/* Otras secciones irían aquí */}
    </>
  );
}
