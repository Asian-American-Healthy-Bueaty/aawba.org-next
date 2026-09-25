export default function SectionIntro({
  eyebrow,
  heading,
  className = '',
}: {
  eyebrow: string
  heading: string
  className?: string
}) {
  return (
    <div className={`text-center ${className}`}>
      <p className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-gold uppercase">{eyebrow}</p>
      <h2 className="text-[clamp(1.6rem,3.5vw,2.1rem)] text-green-dark">{heading}</h2>
    </div>
  )
}
