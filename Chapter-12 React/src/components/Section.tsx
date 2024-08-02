type SectionProps = {
  title?: string;
  children: React.ReactNode;
};
const Section = ({ title = "Default Title", children }: SectionProps) => {
  return (
    <section>
      <h1 className='text-3xl font-bold'>{title}</h1>
      {children}
    </section>
  );
};
export default Section;
