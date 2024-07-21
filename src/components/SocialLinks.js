import SocialLink from './SocialLink'
import { socialLinks } from '../data'

const SocialLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map(({ id, link, icon }) => {
        return (
          <SocialLink key={id} href={link} icon={icon} className={childClass} />
        )
      })}
    </ul>
  )
}
export default SocialLinks
