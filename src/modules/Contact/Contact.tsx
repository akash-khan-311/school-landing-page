"use client";
import { useTranslation } from "@/hooks/useTranslation";
import Container from "@/components/Shared/Container";
import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/ui/Card/ContactCard";
export default function Contact() {
  const { contactData } = useTranslation();
  return (
    <Container>
      <div className="">
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {contactData.contactInfo.map((data) => (
            <ContactCard
              key={data.name}
              Icon={data.Icon}
              title={data.name}
              des={data.value}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
