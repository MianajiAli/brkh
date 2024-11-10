// components/Button.jsx
export default function Button({ text }) {
    return (
        <button className="px-12 py-2 bg-blue-600 hover:opacity-90 duration-300 rounded-full text-xl md:text-2xl mt-6 md:mt-12">
            {text}
        </button>
    );
}
