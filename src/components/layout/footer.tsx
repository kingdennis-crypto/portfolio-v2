import HoverableLink from '@/components/ui/buttons/hoverable-link'

export default function Footer(): JSX.Element {
  function getYear(): number {
    const now = new Date()
    return now.getFullYear()
  }

  return (
    <footer className="transition-colors duration-300 bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light p-4 w-full inline-flex flex-row items-center justify-between">
      <div>
        <p>{getYear()} | &copy; Dennis Moes. All rights reserved</p>
      </div>
      <div className="inline-flex gap-2">
        <HoverableLink
          href="https://github.com/kingdennis-crypto"
          label="GitHub"
          isBold={false}
        />
        <HoverableLink
          href="https://linkedin.com/in/dennismoes"
          label="LinkedIn"
          isBold={false}
        />
      </div>
    </footer>
  )
}
