import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "ru" : "en")}
      className="gap-2 font-mono text-xs"
    >
      <Globe className="w-4 h-4" />
      {language.toUpperCase()}
    </Button>
  );
}
