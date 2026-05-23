import WildPassContent from "@/src/components/agencies/Wild-pass-content";
import { getDictionary } from "../../getDictionary";

interface PageProps {
  params: Promise<{ lang: 'en' | 'es' | 'pt' }>;
}

export default async function AgentsWildPage(props: PageProps) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return <WildPassContent lang={lang} dict={dict} />;
}
