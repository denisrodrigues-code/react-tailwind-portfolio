export const createContactMailtoLink = ({
  recipient,
  name,
  senderEmail,
  message,
}) => {
  const subject = encodeURIComponent(`Contato via Portfolio - ${name}`);
  const body = encodeURIComponent(
    `Nome: ${name}\nEmail: ${senderEmail}\n\nMensagem:\n${message}`,
  );

  return `mailto:${recipient}?subject=${subject}&body=${body}`;
};
