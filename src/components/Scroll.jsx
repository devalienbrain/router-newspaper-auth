import Marquee from "react-fast-marquee";
const Scroll = () => {
  return (
    <div className="p-2 bg-slate-200 flex">
      <button className=" bg-red-600 py-3 px-7 text-white text-lg font-semibold rounded-sm">
        Latest
      </button>
      <Marquee>
        Tumi mor jeeboner vabna. Hridoyer sukher dola. Nijeke ami vulte pari
        tomake jabe naa vola.
      </Marquee>
    </div>
  );
};

export default Scroll;
