const AnsTwo = () => {
  const handleClick = () => {
    alert(`To learn React use https://reactjs.org`);
    alert(`React and ReactDOM works together`);
    alert(`Babel helps in writing JSX`);
  };

  return (
    <button
      className="outline-none border-2 border-teal-900 font-bold py-2 px-6 text-white relative before:absolute before:w-full before:h-full before:bg-teal-900 before:left-0 before:top-0 before:-z-10 before:duration-300 hover:text-teal-900 hover:before:w-0"
      onClick={handleClick}
    >
      How can I help you?
    </button>
  );
};

export default AnsTwo;
