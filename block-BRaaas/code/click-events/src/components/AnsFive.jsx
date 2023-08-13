let fruits = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

const AnsFive = () => {
  console.log(fruits);
  return (
    <div className="flex gap-4">
      {fruits.map(({ id, value }) => (
        <button
          key={id}
          className="px-4 py-2 bg-rose-50  rounded-xl"
          onClick={() => alert(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default AnsFive;
