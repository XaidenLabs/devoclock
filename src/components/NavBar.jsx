const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-4">
      <div className="backdrop-blur-lg bg-white/70 text-dark-brown px-4 py-2 rounded-full shadow-md border border-white/60">
        <p className="text-lg font-bold tracking-tight">Dev O’Clock</p>
      </div>
    </nav>
  );
};

export default NavBar;
