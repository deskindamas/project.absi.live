function DashboardCard(props) {
  return (
    <div className=" w-max my-3 mr-6">
        <div className="card shadow p-9 text-black flex flex-col justify-center border-2 border-skin-primary items-center rounded-lg ">
          <div className="pr-6 flex justify-start items-center w-full ">
            <div className="card-title text-4xl text-neutral-800 py-1 border-b-2 border-skin-primary select-none ">
              {props.name}
            </div>
          </div>
          <div className="card-text pt-6 text-3xl self-end text-skin-primary select-none ">
            {props.value}
          </div>
        </div>
    </div>
  );
}

export default DashboardCard;
