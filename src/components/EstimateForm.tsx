import { FormEvent, useState } from "react";
import { contactInfo } from "../data/site";
import { Button } from "./Button";

type EstimateFormProps = {
  defaultMessage?: string;
  compact?: boolean;
};

export function EstimateForm({ defaultMessage = "", compact = false }: EstimateFormProps) {
  const [formStatus, setFormStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || defaultMessage).trim();
    const subject = encodeURIComponent("Заявка с сайта Ledaks");
    const body = encodeURIComponent(
      `Имя: ${name || "не указано"}\nТелефон: ${phone || "не указан"}\nСообщение: ${
        message || "Хочу обсудить модульный дом Ledaks"
      }`,
    );

    setFormStatus("Откроется почтовое приложение с подготовленной заявкой.");
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className={compact ? "estimate-form estimate-form-compact" : "estimate-form"} onSubmit={handleSubmit}>
      <label>
        Имя
        <input name="name" type="text" placeholder="Как к вам обращаться" />
      </label>
      <label>
        Телефон
        <input name="phone" type="tel" placeholder="+7" inputMode="tel" />
      </label>
      <label>
        Комментарий
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          defaultValue={defaultMessage}
          placeholder="Например: нужен дом 45-60 м² с террасой"
        />
      </label>
      <Button variant="primary" type="submit" showArrow>
        Получить консультацию
      </Button>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </form>
  );
}
