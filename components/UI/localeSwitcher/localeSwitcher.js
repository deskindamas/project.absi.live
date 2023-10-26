import Link from "next/link";
import { useRouter } from "next/router";
import { RiEnglishInput } from "react-icons/ri";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale 
  );

  return (
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale} className="px-2 text-white" >
                {locale === "en" ? <RiEnglishInput className="w-[20px] h-[20px] mx-5 " /> : locale === "ar" ? "عربى" : null}
            </Link>
          </span>
        );
      })}
    </span>
  );
}