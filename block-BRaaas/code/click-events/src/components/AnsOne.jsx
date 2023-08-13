const AnsOne = () => {
  return (
    <button
      className="bg-sky-600 outline-none border-sky-600 border-2 text-white px-6 py-2 rounded-full text-2xl hover:text-sky-600 duration-150 hover:bg-white"
      onClick={() => alert(`Hello React Event`)}
    >
      Click Me
    </button>
  );
};

export default AnsOne;
