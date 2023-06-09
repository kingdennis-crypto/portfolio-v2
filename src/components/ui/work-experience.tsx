import { WorkExperienceProps as Props } from '@/types/props'

export default function WorkExperience({
  title,
  description,
  company,
  start,
  end,
  tags,
}: Props): JSX.Element {
  return (
    <div className="inline-flex flex-col md:flex-row w-full text-lg">
      <div className="w-full md:w-2/6">
        <p>
          {start} - {end}
        </p>
      </div>
      <div className="w-full md:w-4/6">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-base text-tertiary">{company}</p>
        <p className="text-base">{description}</p>
        <div className="inline-flex text-tertiary flex-row text-sm space-x-2">
          {tags.map((tag: string, index: number) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
