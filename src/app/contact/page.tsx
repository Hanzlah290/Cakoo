import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cakoo Bakery to order custom cakes, inquire about desserts, or plan your next celebration.",
};

export default function Page() {
  return <ContactPage />;
}