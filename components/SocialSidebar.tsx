const socials = [
  {
    href: "https://instagram.com/",
    label: "Instagram",
    icon: "bi bi-instagram",
    hoverColor: "hover:text-pink-500",
  },
  {
    href: "https://facebook.com/",
    label: "Facebook",
    icon: "bi bi-facebook",
    hoverColor: "hover:text-blue-500",
  },
  {
    href: "https://linkedin.com/",
    label: "LinkedIn",
    icon: "bi bi-linkedin",
    hoverColor: "hover:text-blue-400",
  },
  {
    href: "https://youtube.com/",
    label: "YouTube",
    icon: "bi bi-youtube",
    hoverColor: "hover:text-red-500",
  },
  {
    href: "https://wa.me/919876543210",
    label: "WhatsApp",
    icon: "bi bi-whatsapp",
    hoverColor: "hover:text-green-500",
  },
];

export default function SocialSidebar() {
  return (
    <div className="fixed bottom-8 -right-1 z-50 flex flex-col items-center gap-1">
      <div className="w-px h-12 mb-2 bg-black" />

      <div className="flex flex-col gap-3">
        {socials.map(({ href, label, icon, hoverColor }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`w-8 h-8 flex items-center justify-center
              text-black hover:scale-125 active:scale-95
              ${hoverColor} transition-all duration-200`}
            style={{
              WebkitTextStroke: "3px white",
              paintOrder: "stroke fill",
            }}
          >
            <i className={`${icon} text-base`} />
          </a>
        ))}
      </div>

      <div className="w-px h-12 mt-2 bg-black" />

      <p
        className="text-[9px] font-bold tracking-[0.2em] uppercase mt-2 text-black"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          WebkitTextStroke: "2px white",
          paintOrder: "stroke fill",
        }}
      >
        Follow Us
      </p>
    </div>
  );
}
