import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.overview": "Overview",
    "nav.worker": "Worker",
    "nav.advertiser": "Advertiser",
    "nav.admin": "Admin",
    "nav.docs": "Docs",
    "nav.connect": "Connect",

    // Hero Section
    "hero.badge": "Stage 1 Active — Limited Capacity",
    "hero.title1": "Guaranteed",
    "hero.title2": "Human",
    "hero.title3": "Attention",
    "hero.subtitle1": "We don't sell clicks. We don't sell traffic.",
    "hero.subtitle2": "We sell verified attention",
    "hero.subtitle3": "with cryptographic proof.",
    "hero.cta.dashboard": "Open Dashboard",
    "hero.cta.docs": "Documentation",

    // Value Cards
    "value.architecture": "ARCHITECTURE",
    "value.title": "Built for Survival",
    "value.subtitle": "Every component works even with 0 Tier-1, 0 contracts and 25 active Tier-4 workers",
    "value.attention.title": "Attention Product",
    "value.attention.desc": "15–120 seconds of verified viewing. No clicks. Completion criteria defined for each task.",
    "value.tier.title": "Tier System",
    "value.tier.desc": "4 worker levels. Growth through behavior, not activity. Income limits at each level.",
    "value.antifraud.title": "Anti-Fraud Engine",
    "value.antifraud.desc": "Bot detection, script blocking, farm detection. Economic attacks are unprofitable.",
    "value.geo.title": "GEO Guarantees",
    "value.geo.desc": "Hard and soft verification. Confidence Score. SLA only after system maturity.",

    // Trust Section
    "trust.badge": "TRUST ARCHITECTURE",
    "trust.title1": "Trust cannot be",
    "trust.title2": "bought",
    "trust.desc": "Trust Score is an intangible asset. It is earned through consistent, quality attention delivery. It decreases with violations. It unlocks access to premium tasks.",
    "trust.formation": "Formation",
    "trust.formation.desc": "Completion rate + response quality + time stability",
    "trust.decrease": "Decrease",
    "trust.decrease.desc": "Violations, fraud attempts, pattern anomalies",
    "trust.access": "Access",
    "trust.access.desc": "Higher trust = better tasks = higher earnings",
    "trust.tier.access": "Tier Access",
    "trust.task.quality": "Task Quality",
    "trust.income.limit": "Income Limit",

    // How It Works
    "how.badge": "STAGE-BASED LAUNCH",
    "how.title": "Growth only when proven",
    "how.subtitle": "No promises until supply is verified. No scaling without reserves. Automatic rollback on degradation.",

    // CTA Section
    "cta.title": "Ready to see the system?",
    "cta.subtitle": "Open the admin panel to monitor Tier workers, Trust Score, anti-fraud metrics and reserve status in real time.",
    "cta.button": "Open Admin Dashboard",

    // Footer
    "footer.docs": "Documentation",
    "footer.protocol": "Verified Human Attention Protocol",
    "footer.stage": "Stage 1 Active",

    // Worker Dashboard
    "worker.title": "Worker Dashboard",
    "worker.subtitle": "Complete tasks • Increase Trust Score • Boost earnings",
    "worker.bonus.task": "Bonus Task",
    "worker.trust.score": "Trust Score",
    "worker.referral.trust": "Referral Trust",
    "worker.invited": "invited",
    "worker.balance": "Balance",
    "worker.income.limit": "Income Limit",
    "worker.completed": "Completed",
    "worker.failed": "failed",
    "worker.available.tasks": "Available Tasks",
    "worker.available": "available",
    "worker.accept": "Accept",
    "worker.requires.tier": "Requires Tier 2",
    "worker.post.attention": "Post-Attention Signal",
    "worker.post.attention.desc": "Answer the question after viewing",
    "worker.post.attention.question": "What was the main product shown in the ad?",
    "worker.activity.history": "Activity History",
    "worker.today": "Today",
    "worker.yesterday": "Yesterday",
    "worker.days.ago": "days ago",
    "worker.tasks": "tasks",
    "worker.referral.panel": "Referral Panel",
    "worker.no.money": "No money for registration",
    "worker.only.rt": "Only Referral Trust for quality referrals",
    "worker.geo.bonus": "GEO Bonus",
    "worker.geo.bonus.desc": "Additional tasks for your region",
    "worker.check.availability": "Check Availability",

    // Advertiser Dashboard
    "advertiser.title": "Advertiser Dashboard",
    "advertiser.subtitle": "Campaign settings • AI recommendations • Transparent reporting",
    "advertiser.export": "Export",
    "advertiser.new.campaign": "New Campaign",
    "advertiser.active.campaigns": "Active Campaigns",
    "advertiser.attention.delivered": "Attention Delivered",
    "advertiser.seconds": "seconds",
    "advertiser.avg.trust": "Avg Trust Score",
    "advertiser.geo.confidence": "GEO Confidence",
    "advertiser.high": "High",
    "advertiser.campaign.settings": "Campaign Settings",
    "advertiser.advanced.mode": "Advanced Mode",
    "advertiser.attention.duration": "Attention Duration",
    "advertiser.show.interval": "Show Interval",
    "advertiser.geo.filters": "GEO Filters",
    "advertiser.audience.tier": "Audience Tier",
    "advertiser.active.campaigns.list": "Active Campaigns",
    "advertiser.total": "total",
    "advertiser.progress": "Progress",
    "advertiser.ai.recommendations": "AI Recommendations",
    "advertiser.contracts": "Contracts",
    "advertiser.active": "active",
    "advertiser.discount": "Discount",
    "advertiser.used": "Used",
    "advertiser.remaining": "Remaining",
    "advertiser.warning": "Warning",
    "advertiser.supply.warning": "Tier-1 supply unavailable. Premium Human product is blocked until Tier-1 workers appear.",

    // Admin Dashboard
    "admin.title": "Admin Dashboard",
    "admin.subtitle": "System monitoring • Risk management • Financial control",
    "admin.export.csv": "Export CSV",
    "admin.refresh": "Refresh",
    "admin.settings": "Settings",
    "admin.system.stage": "System Stage",
    "admin.auto.transition": "AUTO-TRANSITION DISABLED",
    "admin.total.workers": "Total Workers",
    "admin.this.week": "this week",
    "admin.attention.units": "Attention Units",
    "admin.available.now": "Available now",
    "admin.revenue": "Revenue (24h)",
    "admin.from.units": "From 892 units",
    "admin.vs.avg": "vs avg",
    "admin.target.stage": "Target Stage 2",
    "admin.tier.distribution": "Worker Tier Distribution",
    "admin.workers": "workers",
    "admin.active": "active",
    "admin.attention.products": "Attention Products",
    "admin.in.stock": "IN STOCK",
    "admin.completion": "completion",
    "admin.avail": "avail",
    "admin.antifraud.engine": "Anti-Fraud Engine",
    "admin.detected": "detected",
    "admin.auto.blocks": "Auto-blocks today",
    "admin.loss.prevented": "Economic loss prevented",
    "admin.fraud.rate": "Fraud rate",
    "admin.system.trust": "System Trust Score",
    "admin.system.avg": "System Avg",
    "admin.min.threshold": "Min threshold",
    "admin.target": "Target (Stage 2)",
    "admin.reserves": "Financial Reserves",
    "admin.low": "LOW",
    "admin.stability.reserve": "Stability Reserve",
    "admin.from.minimum": "from minimum — growth blocked",
    "admin.growth.reserve": "Growth Reserve",
    "admin.blocked.until": "Blocked until Stage 2",
    "admin.risk.alerts": "Risk Alerts",
    "admin.reserve.low": "Stability Reserve Low",
    "admin.reserve.low.desc": "84% from minimum. Growth operations blocked.",
    "admin.no.tier1": "0 Tier-1 Workers",
    "admin.no.tier1.desc": "Premium Human product unavailable.",
    "admin.today.activity": "Today's Activity",
    "admin.tasks.completed": "Tasks completed",
    "admin.tasks.failed": "Tasks failed",
    "admin.completion.rate": "Completion rate",

    // Common
    "common.stage": "STAGE",
  },
  ru: {
    // Navigation
    "nav.overview": "Обзор",
    "nav.worker": "Воркер",
    "nav.advertiser": "Рекламодатель",
    "nav.admin": "Админ",
    "nav.docs": "Документация",
    "nav.connect": "Подключить",

    // Hero Section
    "hero.badge": "Stage 1 Активен — Ограниченная мощность",
    "hero.title1": "Гарантированное",
    "hero.title2": "Человеческое",
    "hero.title3": "Внимание",
    "hero.subtitle1": "Мы не продаём клики. Мы не продаём трафик.",
    "hero.subtitle2": "Мы продаём верифицированное внимание",
    "hero.subtitle3": "с криптографическим доказательством.",
    "hero.cta.dashboard": "Открыть Dashboard",
    "hero.cta.docs": "Документация",

    // Value Cards
    "value.architecture": "АРХИТЕКТУРА",
    "value.title": "Построено для выживания",
    "value.subtitle": "Каждый компонент работает даже при 0 Tier-1, 0 контрактов и 25 активных Tier-4 воркеров",
    "value.attention.title": "Продукт Внимание",
    "value.attention.desc": "15–120 секунд верифицированного просмотра. Без кликов. Критерии выполнения определены для каждой задачи.",
    "value.tier.title": "Tier Система",
    "value.tier.desc": "4 уровня воркеров. Рост через поведение, не активность. Лимиты дохода на каждом уровне.",
    "value.antifraud.title": "Антифрод Движок",
    "value.antifraud.desc": "Детекция ботов, блокировка скриптов, обнаружение ферм. Экономические атаки нерентабельны.",
    "value.geo.title": "GEO Гарантии",
    "value.geo.desc": "Жёсткая и мягкая верификация. Confidence Score. SLA только после созревания системы.",

    // Trust Section
    "trust.badge": "АРХИТЕКТУРА ДОВЕРИЯ",
    "trust.title1": "Доверие нельзя",
    "trust.title2": "купить",
    "trust.desc": "Trust Score — нематериальный актив. Он зарабатывается через последовательную, качественную доставку внимания. Он падает при нарушениях. Он открывает доступ к премиальным заданиям.",
    "trust.formation": "Формирование",
    "trust.formation.desc": "Completion rate + качество ответов + стабильность времени",
    "trust.decrease": "Падение",
    "trust.decrease.desc": "Нарушения, попытки фрода, аномалии паттернов",
    "trust.access": "Доступ",
    "trust.access.desc": "Выше trust = лучше задачи = выше заработок",
    "trust.tier.access": "Доступ к уровням",
    "trust.task.quality": "Качество задач",
    "trust.income.limit": "Лимит дохода",

    // How It Works
    "how.badge": "ПОЭТАПНЫЙ ЗАПУСК",
    "how.title": "Рост только когда доказан",
    "how.subtitle": "Никаких обещаний пока supply не верифицирован. Никакого масштабирования без резервов. Автоматический откат при деградации.",

    // CTA Section
    "cta.title": "Готовы увидеть систему?",
    "cta.subtitle": "Откройте админ панель для мониторинга Tier воркеров, Trust Score, антифрод метрик и статуса резервов в реальном времени.",
    "cta.button": "Открыть Admin Dashboard",

    // Footer
    "footer.docs": "Документация",
    "footer.protocol": "Протокол верифицированного человеческого внимания",
    "footer.stage": "Stage 1 Активен",

    // Worker Dashboard
    "worker.title": "Рабочий стол воркера",
    "worker.subtitle": "Выполняйте задания • Повышайте Trust Score • Увеличивайте доход",
    "worker.bonus.task": "Бонусное задание",
    "worker.trust.score": "Trust Score",
    "worker.referral.trust": "Referral Trust",
    "worker.invited": "приглашённых",
    "worker.balance": "Баланс",
    "worker.income.limit": "Лимит дохода",
    "worker.completed": "Выполнено",
    "worker.failed": "провалено",
    "worker.available.tasks": "Доступные задания",
    "worker.available": "доступно",
    "worker.accept": "Принять",
    "worker.requires.tier": "Требуется Tier 2",
    "worker.post.attention": "Post-Attention Сигнал",
    "worker.post.attention.desc": "Ответьте на вопрос после просмотра",
    "worker.post.attention.question": "Какой главный продукт был показан в рекламе?",
    "worker.activity.history": "История активности",
    "worker.today": "Сегодня",
    "worker.yesterday": "Вчера",
    "worker.days.ago": "дня назад",
    "worker.tasks": "задач",
    "worker.referral.panel": "Реферальная панель",
    "worker.no.money": "Нет денег за регистрацию",
    "worker.only.rt": "Только Referral Trust за качество рефералов",
    "worker.geo.bonus": "GEO Бонус",
    "worker.geo.bonus.desc": "Дополнительные задания для вашего региона",
    "worker.check.availability": "Проверить доступность",

    // Advertiser Dashboard
    "advertiser.title": "Кабинет рекламодателя",
    "advertiser.subtitle": "Настройка кампаний • AI-рекомендации • Прозрачная отчётность",
    "advertiser.export": "Экспорт",
    "advertiser.new.campaign": "Новая кампания",
    "advertiser.active.campaigns": "Активные кампании",
    "advertiser.attention.delivered": "Доставлено внимания",
    "advertiser.seconds": "секунд",
    "advertiser.avg.trust": "Avg Trust Score",
    "advertiser.geo.confidence": "GEO Confidence",
    "advertiser.high": "High",
    "advertiser.campaign.settings": "Настройка кампании",
    "advertiser.advanced.mode": "Расширенный режим",
    "advertiser.attention.duration": "Длительность внимания",
    "advertiser.show.interval": "Интервал показов",
    "advertiser.geo.filters": "GEO фильтры",
    "advertiser.audience.tier": "Tier аудитории",
    "advertiser.active.campaigns.list": "Активные кампании",
    "advertiser.total": "всего",
    "advertiser.progress": "Прогресс",
    "advertiser.ai.recommendations": "AI Рекомендации",
    "advertiser.contracts": "Контракты",
    "advertiser.active": "активен",
    "advertiser.discount": "Скидка",
    "advertiser.used": "Использовано",
    "advertiser.remaining": "Остаток",
    "advertiser.warning": "Предупреждение",
    "advertiser.supply.warning": "Tier-1 supply недоступен. Premium Human продукт заблокирован до появления Tier-1 воркеров.",

    // Admin Dashboard
    "admin.title": "Админ Dashboard",
    "admin.subtitle": "Мониторинг системы • Управление рисками • Финансовый контроль",
    "admin.export.csv": "Экспорт CSV",
    "admin.refresh": "Обновить",
    "admin.settings": "Настройки",
    "admin.system.stage": "System Stage",
    "admin.auto.transition": "АВТО-ПЕРЕХОД ОТКЛЮЧЁН",
    "admin.total.workers": "Всего воркеров",
    "admin.this.week": "на этой неделе",
    "admin.attention.units": "Единицы внимания",
    "admin.available.now": "Доступно сейчас",
    "admin.revenue": "Выручка (24ч)",
    "admin.from.units": "От 892 units",
    "admin.vs.avg": "от среднего",
    "admin.target.stage": "Цель Stage 2",
    "admin.tier.distribution": "Распределение воркеров по Tier",
    "admin.workers": "воркеров",
    "admin.active": "активных",
    "admin.attention.products": "Продукты внимания",
    "admin.in.stock": "В НАЛИЧИИ",
    "admin.completion": "завершений",
    "admin.avail": "доступно",
    "admin.antifraud.engine": "Антифрод движок",
    "admin.detected": "обнаружено",
    "admin.auto.blocks": "Авто-блокировок сегодня",
    "admin.loss.prevented": "Предотвращено потерь",
    "admin.fraud.rate": "Уровень фрода",
    "admin.system.trust": "Системный Trust Score",
    "admin.system.avg": "Системный Avg",
    "admin.min.threshold": "Мин. порог",
    "admin.target": "Цель (Stage 2)",
    "admin.reserves": "Финансовые резервы",
    "admin.low": "НИЗКИЙ",
    "admin.stability.reserve": "Резерв стабильности",
    "admin.from.minimum": "от минимума — рост заблокирован",
    "admin.growth.reserve": "Резерв роста",
    "admin.blocked.until": "Заблокировано до Stage 2",
    "admin.risk.alerts": "Предупреждения о рисках",
    "admin.reserve.low": "Резерв стабильности низкий",
    "admin.reserve.low.desc": "84% от минимума. Операции роста заблокированы.",
    "admin.no.tier1": "0 Tier-1 воркеров",
    "admin.no.tier1.desc": "Premium Human продукт недоступен.",
    "admin.today.activity": "Активность сегодня",
    "admin.tasks.completed": "Задач выполнено",
    "admin.tasks.failed": "Задач провалено",
    "admin.completion.rate": "Процент выполнения",

    // Common
    "common.stage": "СТАДИЯ",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
