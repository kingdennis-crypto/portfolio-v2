'use client'

import Link from 'next/link'
import SocialBtn from '@/components/ui/buttons/social-btn'
import HoverableLink from '@/components/ui/buttons/hoverable-link'
import WorkExperience from '@/components/ui/work-experience'

import { useRef } from 'react'
import { WorkExperienceProps as Work } from '@/types/props'

import { motion } from 'framer-motion'
import { Variants } from 'framer-motion'

type Props = {
  workExperience: Work[]
}

// TODO: Navbar as last
const CONTAINER: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.6,
    },
  },
}

const ITEM: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function HomePage({ workExperience }: Props) {
  const secondSection = useRef<HTMLElement>(null)

  function scrollToSecondSection() {
    // Get the scrollable position of the second section and add a negative offset
    const positionY =
      secondSection.current!.getBoundingClientRect().top + window.screenY - 100

    // Scroll to said position
    window.scrollTo({ top: positionY, behavior: 'smooth' })
  }

  return (
    <>
      <section id="banner" className="min-h-screen max-w-4xl grid mx-auto px-4">
        <motion.div
          variants={CONTAINER}
          initial="hidden"
          animate="visible"
          className="space-y-4 mt-16 md:mt-40"
        >
          <motion.div variants={ITEM}>
            <motion.p variants={ITEM} className="text-xl text-tertiary">
              Hi, my name is
            </motion.p>
            <motion.p variants={ITEM} className="text-7xl font-semibold">
              Dennis Moes
            </motion.p>
            <motion.p variants={ITEM} className="text-5xl">
              And I build things
            </motion.p>
          </motion.div>
          <motion.p variants={ITEM} className="text-xl">
            I&apos;m a Software Engineer student at the{' '}
            <HoverableLink
              label="Amsterdam University Of Applied Sciences"
              href="https://hva.nl"
              newTab
            />{' '}
            who enjoys programming and making it look pretty.
          </motion.p>
          <motion.div variants={ITEM} className="flex flex-row flex-wrap gap-2">
            <div
              className="cursor-pointer"
              onClick={() => scrollToSecondSection()}
            >
              <SocialBtn label="Details">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 9l6 6l6 -6"></path>
              </SocialBtn>
            </div>
            <Link
              href="https://linkedin.com/in/dennismoes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialBtn label="LinkedIn">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </SocialBtn>
            </Link>
            <Link
              href="https://github.com/kingdennis-crypto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialBtn label="GitHub">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </SocialBtn>
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <section
        id="work-experience"
        ref={secondSection}
        className="min-h-screen max-w-4xl pb-32 mx-auto space-y-12 text-2xl md:text-2xl px-4"
      >
        <div>
          <p>Work experience</p>
          <p className="text-base">
            From working as a cashier to co-founding, this is my range of work
            experience.
          </p>
        </div>
        <div className="inline-flex flex-col w-full space-y-8">
          {workExperience.map((work: Work, index: number) => (
            <WorkExperience key={index} {...work} />
          ))}
        </div>
      </section>
    </>
  )
}
