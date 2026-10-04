import Image from 'next/image'
import type { EventDescriptionBlock, EventDescriptionSection } from '@/data/events'

function Lines({ text }: { text: string }) {
  const lines = text.split('\n')
  return lines.map((line, i) => (
    <span key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </span>
  ))
}

function Block({ block, alt }: { block: EventDescriptionBlock; alt: string }) {
  switch (block.type) {
    case 'list':
      return (
        <ul className="mb-4 list-disc pl-5 text-[0.98rem] leading-[1.75] text-text">
          {block.items?.map((item, i) => (
            <li key={i} className="mb-1.5">
              {item}
            </li>
          ))}
        </ul>
      )

    case 'image':
      if (!block.src) return null
      return (
        <div className="my-5 flex justify-center">
          <Image
            src={block.src}
            alt={block.width ? '' : alt}
            aria-hidden={block.width ? true : undefined}
            unoptimized={block.src.src.endsWith('.gif')}
            style={block.width ? { width: block.width } : undefined}
            className={block.width ? 'h-auto max-w-full' : 'h-auto w-full max-w-[540px] rounded-lg'}
          />
        </div>
      )

    case 'table': {
      const [header, ...body] = block.rows ?? []
      return (
        <div className="mb-4 overflow-x-auto">
          <table className="w-full border-collapse border-2 border-[#285583] text-center text-[0.92rem] leading-[1.6] text-[#285583]">
            {header && (
              <thead>
                <tr>
                  {header.map((cell, i) => (
                    <th key={i} className="border-2 border-[#285583] bg-[#285583] px-3 py-2 font-bold text-white">
                      <Lines text={cell} />
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {body.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c} className="border border-[#285583] px-3 py-2">
                      <Lines text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    case 'box':
      return (
        <div className="mb-5">
          {block.title && (
            <p className="mb-2 flex items-center gap-2 text-[0.98rem] font-bold text-text-h">
              {block.icon && (
                <Image src={block.icon} alt="" aria-hidden="true" unoptimized className="h-[14px] w-[14px]" />
              )}
              {block.title}
            </p>
          )}
          <div
            className={
              block.variant === 'tint'
                ? 'rounded-md bg-[#e4eefd] px-5 py-4 text-[#535456] [&>*:last-child]:mb-0'
                : 'rounded-md border border-[#ffd7d5] bg-white px-5 py-4 [&>*:last-child]:mb-0'
            }
          >
            {block.blocks?.map((child, i) => <Block key={i} block={child} alt={alt} />)}
          </div>
        </div>
      )

    default:
      return (
        <p
          className={[
            'mb-4 leading-[1.75]',
            block.small ? 'text-[0.85rem]' : 'text-[0.98rem]',
            block.bold ? 'font-bold' : '',
            block.muted ? 'text-[#888888]' : 'text-text',
            block.align === 'center' ? 'text-center' : '',
          ].join(' ')}
        >
          {block.text && <Lines text={block.text} />}
        </p>
      )
  }
}

export default function EventDescription({ sections, alt }: { sections: EventDescriptionSection[]; alt: string }) {
  return sections.map((section, sectionIndex) => (
    <div key={sectionIndex} className="[&+&]:mt-2">
      {section.heading &&
        (section.headingStyle === 'banner' ? (
          <div className="mt-8 mb-5 flex flex-col items-center gap-1.5 text-center">
            <h3 className="text-[1.3rem] font-bold text-[#212122]">{section.heading}</h3>
            <span
              aria-hidden="true"
              className="flex h-5 w-3 items-center justify-center bg-[#212122] text-[0.7rem] text-white"
            >
              ∨
            </span>
          </div>
        ) : (
          <h3 className="mb-3 text-[1.1rem] text-green-dark">{section.heading}</h3>
        ))}
      {section.blocks.map((block, blockIndex) => (
        <Block key={blockIndex} block={block} alt={alt} />
      ))}
    </div>
  ))
}
