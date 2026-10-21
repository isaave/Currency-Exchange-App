/**
 * Casca visual usada por todos os exercícios.
 * Reproduz o frame do Figma: badge, título, subtítulo e régua divisória.
 */
export default function ExerciseFrame({ number, title, subtitle, children }) {
  return (
    <section
      id={`exercicio-${number}`}
      className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
    >
      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold tracking-wide text-blue-600 uppercase">
        Exercise {number}
      </span>

      <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      <p className="mt-1 text-sm text-muted">{subtitle}</p>

      <hr className="my-6 border-border" />

      {children}
    </section>
  );
}
