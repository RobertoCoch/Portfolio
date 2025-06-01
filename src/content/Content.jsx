import { Hero } from "./sections/Hero"
import { AboutMe } from "./sections/AboutMe"
import { Skills } from "./sections/Skills"
import { Projects } from "./sections/Projects"
import { Education } from "./sections/Education"
import { Certificates } from "./sections/Certificates"

export const Content = () => {
  return (
    <>
      <div className="w-full bg-[#030711]">
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <Education></Education>
        <Certificates></Certificates>
      </div>
    </>
  )
}
