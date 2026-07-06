export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/10 px-6 md:px-16 py-10 flex flex-col md:flex-row justify-between gap-4 text-micro font-mono text-white/40">
      <span>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</span>
      <div className="flex gap-6">
        <a href="mailto:hello@example.com" className="text-link hover:underline">
          Email
        </a>
        <a href="#" className="text-link hover:underline">
          GitHub
        </a>
        <a href="#" className="text-link hover:underline">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
