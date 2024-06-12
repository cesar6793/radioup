export interface AccordionProps {
  children: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return <div className=' '>{children}</div>
}

export default Accordion
