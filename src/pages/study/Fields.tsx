type Props = {
  title?: string;
};
const Fields = ({ title = "Fields" }: Props) => {
  const { url } = useAppSelector((state) => state.app);
  return (
    <div className="flex flex-col text-black items-center justify-center h-full w-full">
      <h1 className="text-2xl font-bold text-slate-50">{title}</h1>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p className="text-slate-50">This is the fields slide</p>
      </div>
    </div>
  );
};

export default Fields;
