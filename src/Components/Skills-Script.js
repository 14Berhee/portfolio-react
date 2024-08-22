export const Script = (props) => {
  const { icon, name } = props;

  return (
 
    <div className="  mt-6 flex justify-center flex-col items-center  " >
      {icon}
      <p>{name}</p>
    </div>
    
 
  );
};
