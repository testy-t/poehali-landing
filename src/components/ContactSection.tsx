const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <a
          href="https://t.me/your_telegram_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <i className="bi bi-telegram text-2xl"></i>
          Написать в Telegram
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
