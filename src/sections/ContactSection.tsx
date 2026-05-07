import { Mail, MapPin, Phone } from "lucide-react";
import { EstimateForm } from "../components/EstimateForm";
import { SectionHeader } from "../components/SectionHeader";
import { contactInfo } from "../data/site";

export function ContactSection() {
  return (
    <section className="section contact-section" id="contacts">
      <div className="contact-panel">
        <div>
          <SectionHeader
            number="05"
            title="Напишите, какой дом нужен"
            text="Без формы на сервере: заявка уходит через вашу почту, а быстрый контакт остается по телефону."
            align="stack"
          />
          <div className="contact-links">
            <a href={contactInfo.phoneHref}>
              <Phone size={18} />
              {contactInfo.phoneDisplay}
            </a>
            <a href={`mailto:${contactInfo.email}`}>
              <Mail size={18} />
              {contactInfo.email}
            </a>
            <span>
              <MapPin size={18} />
              {contactInfo.address}
            </span>
          </div>
          <p className="legal">{contactInfo.director}</p>
        </div>
        <EstimateForm defaultMessage="Хочу получить 3 варианта планировки под мой участок." />
      </div>
    </section>
  );
}
