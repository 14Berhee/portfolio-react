export const Script = (props) => {
  const { icon, name } = props;

  return (
    <div className="flex items-center flex-col  mt-6">
      {icon}
      <p>{name}</p>
    </div>
  );
};
