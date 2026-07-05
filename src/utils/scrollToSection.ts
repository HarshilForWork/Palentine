export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const header = document.querySelector('header');
  const offset = (header?.getBoundingClientRect().height ?? 0) + 16;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: 'smooth' });
}
