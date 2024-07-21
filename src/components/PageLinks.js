import PageLink from './PageLink'
import { pageLinks } from '../data'

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map(({ id, link, name }) => {
        return (
          <PageLink key={id} href={link} name={name} className={childClass} />
        )
      })}
    </ul>
  )
}
export default PageLinks
