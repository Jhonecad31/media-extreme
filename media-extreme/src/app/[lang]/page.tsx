import HomeContent from "@/src/components/Home-content";
import { getDictionary } from "../getDictionary";

interface PageProps {
  params: Promise<{ lang: 'en' | 'es' | 'pt' }>;
}

export default async function HomePage(props: PageProps) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return <HomeContent lang={lang} dict={dict} />;
}
