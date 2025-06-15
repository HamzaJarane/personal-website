import tw from "twin.macro";

export const Loading = () => {
  return (
    <div css={tw`h-screen w-screen flex justify-center items-center`}>
      <div className="loader" />
    </div>
  );
};