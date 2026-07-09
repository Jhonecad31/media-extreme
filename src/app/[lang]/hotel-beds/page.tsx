import HotelBedsContent from "@/src/components/agencies/Hotel-beds-content";
import { getDictionary } from "../../getDictionary";

interface PageProps {
  params: Promise<{ lang: 'en' | 'es' | 'pt' }>;
}

export default async function AgentsHotelPage(props: PageProps) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return <HotelBedsContent lang={lang} dict={dict} />;
}
