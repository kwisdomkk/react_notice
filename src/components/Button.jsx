export default function Button({ type, text }) {
  return (
    <button
      type={type}
      className="bg-teal-500 font-semibold text-white h-10 rounded-md transition duration-300 hover:bg-teal-400"
    >
    {text}
    </button>
  );
}
