import BestDayContent from "@/src/components/agencies/Best-day-content";
import { getDictionary } from "../../getDictionary";

interface PageProps {
  params: Promise<{ lang: 'en' | 'es' | 'pt' }>;
}

export default async function AgentsBestPage(props: PageProps) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return <BestDayContent lang={lang} dict={dict} />;
}
