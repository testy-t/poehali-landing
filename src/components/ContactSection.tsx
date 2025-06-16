import { StarBorder } from "@/components/ui/star-border";

const ContactSection = () => {
  return (
    <div className="flex justify-center">
      <StarBorder
        as="a"
        href="https://t.me/m/hEQRio2kNmFi"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform hover:scale-105"
        color="#ffffff"
        speed="8s"
      >
        <div className="flex items-center gap-3 bg-zinc-900 text-white px-6 py-3 rounded-[20px] border-0">
          <i className="bi bi-telegram text-xl"></i>
          <span className="font-semibold">Начать работу</span>
        </div>
      </StarBorder>
    </div>
  );
};

export default ContactSection;
