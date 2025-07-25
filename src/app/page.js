import { redirect } from "next/navigation";
import HomeWrapper from "./components/HomeWrapper";


export default function HomePage() {
  const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "false";

  if (isMaintenance) {
    redirect("/mantenimiento");
  }

  return <HomeWrapper />;
}