import { useState } from "react";
import { TeamCard } from "./TeamCard";
import { useLanguage } from "@/context/LanguageContext";

export const TeamsSections = () => {
  const [activeCard, setActiveCard] = useState(null);
  const { t } = useLanguage();

  const members = [
    {
      id: "1",
      name: t("TeamsSections.card1.name"),
      role: t("TeamsSections.card1.position"),
      image: "/about-us/alicia-profile.webp",
      description: (
        <>
          {t("TeamsSections.card1.description").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </>
      ),
    },
    {
      id: "2",
      name: t("TeamsSections.card2.name"),
      role: t("TeamsSections.card2.position"),
      image: "/about-us/mariella-profile.webp",
      description: (
        <>
          {t("TeamsSections.card2.description").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </>
      ),
    },
  ];

  return (
    <section
      className="w-full flex flex-col justify-center items-center py-20 bg-muted text-text-primary min-h-[100vh] "
      id="teams"
    >
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-12">{t("TeamsSections.title")}</h1>
      </div>
      <div className=" w-full flex flex-col md:flex-row gap-4 overflow-hidden justify-center items-center p-4">
        {members.map((member) => (
          <TeamCard
            key={member.id}
            isActive={activeCard === member.id}
            isCollapsed={activeCard !== null && activeCard !== member.id}
            onClick={() => setActiveCard(member.id)}
            onClose={() => setActiveCard(null)}
            seeMoreText={t("TeamsSections.seeMore")}
            seeLessText={t("TeamsSections.seeLess")}
            seeProfileText={t("TeamsSections.seeDescription")}
            {...member}
          />
        ))}
      </div>
    </section>
  );
};
