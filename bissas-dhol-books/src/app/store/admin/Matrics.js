const Metrics = ({ label, amount }) => {
  return (
    <div className="flex flex-col p-2 border w-1/2 rounded-md border-white">
      <h2 className="text-xl my-2 font-semibold">{label}</h2>
      <p className="text-3xl">{new Intl.NumberFormat().format(amount)} BDT</p>
    </div>
  );
};

export default Metrics;
