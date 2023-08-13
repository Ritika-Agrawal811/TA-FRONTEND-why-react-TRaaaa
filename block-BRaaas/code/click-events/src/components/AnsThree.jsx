const AnsThree = () => {
  const displayName = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <div className="flex gap-4">
      <button
        className="outline-none px-4 py-2 text-white font-bold bg-amber-500 duration-75 hover:bg-amber-300"
        onClick={() => displayName("Arya")}
      >
        Arya
      </button>
      <button
        className="outline-none px-4 py-2 text-white font-bold bg-lime-700 duration-75 hover:bg-lime-500"
        onClick={() => displayName("John")}
      >
        John
      </button>
      <button
        className="outline-none px-4 py-2 text-white font-bold bg-violet-900 duration-75 hover:bg-violet-700"
        onClick={() => displayName("Bran")}
      >
        Bran
      </button>
    </div>
  );
};

export default AnsThree;
