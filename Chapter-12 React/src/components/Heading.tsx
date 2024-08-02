type Props = {
  title: string;
};
const Heading = ({ title }: Props) => {
  return <h1 className='text-2xl'>{title}</h1>;
};
export default Heading;
