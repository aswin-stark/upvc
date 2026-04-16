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
    <div className="fixed top-[130px] left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-1.5 py-1 sm:px-4 sm:py-2 sm:top-[150px]  bg-white/70 backdrop-blur-md rounded-full shadow-md">
      {socials.map(({ href, label, icon, hoverColor }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`w-9 h-9 flex items-center justify-center
            text-black hover:scale-110 active:scale-95
            ${hoverColor} transition-all duration-200`}
          style={{
            WebkitTextStroke: "2px white",
            paintOrder: "stroke fill",
          }}
        >
          <i className={`${icon} text-lg`} />
        </a>
      ))}
    </div>
  );
}
