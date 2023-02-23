interface PopularItmProps {
  image?: string;
  title?: string;
  artist?: string;
  id?: string;
  setId?(id: string): void;
}

export default PopularItmProps;