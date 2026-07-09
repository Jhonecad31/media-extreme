import JopaNauticosContent from "@/src/components/agencies/Jopa-nauticos-content";
import { getDictionary } from "../../getDictionary";

interface PageProps {
  params: Promise<{ lang: 'en' | 'es' | 'pt' }>;
}

export default async function AgentsJopaPage(props: PageProps) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return <JopaNauticosContent lang={lang} dict={dict} />;
}
