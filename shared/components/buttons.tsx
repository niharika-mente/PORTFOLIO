interface Props {
  text: string;
  type: 'solid' | 'outlined';
  onClickHandler: () => void;
}
export default function Button({ text, type, onClickHandler = () => { } }: Props): JSX.Element {
  return (
    <>
      <button
        type="button"
        onClick={onClickHandler}
        className={`font-regular
                    px-6 sm:px-4 xl:px-6 py-4 w-48 sm:w-52 md:w-52 2xl:w-60 text-7xl h-25 transition-all
                    rounded overflow-hidden border-2 
                    hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 ease-in-out 
                    ${type === "solid"
            ? " text-white border-purple bg-purple hover:bg-transparent hover:text-purple focus:outline-none"
            : " border-purple text-white hover:outline-none hover:bg-purple hover:text-white focus:outline-none"
          }
                   `}
      >
        {text}
      </button>
    </>
  );
}
