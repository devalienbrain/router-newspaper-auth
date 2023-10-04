const RightNav = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-5">Login with</h3>
      <div className="py-4">
        <button className="border border-black rounded px-5 py-3">
          Login with google
        </button>
      </div>
      <div className="py-2">
        <button className="border border-black rounded px-5 py-3">
          Login with github
        </button>
      </div>
    </div>
  );
};

export default RightNav;
