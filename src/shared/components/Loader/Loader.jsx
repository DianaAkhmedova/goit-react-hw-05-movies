import { LoaderThreeDots } from './loader.styled';

const Loader = () => {
  return (
    <LoaderThreeDots
      height="80"
      width="80"
      radius="9"
      color="#6e6d7a"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
