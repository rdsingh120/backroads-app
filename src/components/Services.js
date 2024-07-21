import Title from './Title'
import Service from './Service'
import { services } from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title text="our" spanText="services" />
      <div className="section-center services-center">
        {services.map(({ id, title, description }) => (
          <Service key={id} title={title} description={description} />
        ))}
      </div>
    </section>
  )
}
export default Services
