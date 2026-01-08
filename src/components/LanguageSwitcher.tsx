import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "ru" : "en")}
      className="gap-2 font-mono text-xs px-2.5"
      aria-label="Switch language"
      title={language === "en" ? "Switch to Russian" : "Switch to English"}
    >
      <Globe className="w-4 h-4" />
      {language.toUpperCase()}
    </Button>
  );
}
