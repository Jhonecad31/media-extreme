import AgenciesList from "@/src/components/agencies/Agencies-list";
import { getDictionary } from "../../getDictionary";

interface PageProps {
  params: Promise<{ lang: 'en' | 'es' | 'pt' }>;
}

export default async function AgenciesPage(props: PageProps) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return <AgenciesList lang={lang} dict={dict} />;
}
