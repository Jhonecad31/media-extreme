import TropicalIncentivesContent from "@/src/components/agencies/Tropical-incetives-content";
import { getDictionary } from "../../getDictionary";

interface PageProps {
  params: Promise<{ lang: 'en' | 'es' | 'pt' }>;
}

export default async function AgentsTropicalPage(props: PageProps) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return <TropicalIncentivesContent lang={lang} dict={dict} />;
}
