import React, {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
  } from "react";
  import { Link, NavLink, useLocation } from "react-router-dom";
  import "./Navbar.css";
  
  function Navbar() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [nameLeft, setNameLeft] = useState(null);
  
    const nameRef = useRef(null);
    const navRef = useRef(null);
  
    /* ---------- Trạng thái hero/collapsed ---------- */
    const isHome = location.pathname === "/";
    const isHero = isHome && !isScrolled;
  
    /* ---------- Theo dõi cuộn ---------- */
    useEffect(() => {
      const onScroll = () => setIsScrolled(window.scrollY > 0);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
    /* ---------- Hàm căn “HUY DO” cách Navbar 20 px ---------- */
    const recalcNamePos = () => {
      if (!isHero || !nameRef.current || !navRef.current) return;
      const navRect = navRef.current.getBoundingClientRect();
      const nameW = nameRef.current.offsetWidth;
      setNameLeft(navRect.left - 20 - nameW); // 20 px khoảng cách
    };
  
    /* ---------- Gọi khi vào hero ---------- */
    useLayoutEffect(() => {
      recalcNamePos();
  
      if (!isHero) return;
  
      // Nghe sự kiện transitionend & resize
      const handleResize = () => recalcNamePos();
      const handleTransitionEnd = (e) => {
        if (e.propertyName.includes("transform")) recalcNamePos();
      };
  
      window.addEventListener("resize", handleResize);
      const navNode = navRef.current;
      if (navNode) {
        navNode.addEventListener("transitionend", handleTransitionEnd);
      }

      return () => {
        window.removeEventListener("resize", handleResize);
        if (navNode) {
          navNode.removeEventListener("transitionend", handleTransitionEnd);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isHero]);
  
    return (
      <>
        {/* ---- PILL TÊN ---- */}
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div
          ref={nameRef}
          className={`name-pill glass ${isHero ? "hero" : "collapsed"}`}
          style={
            isHero
              ? { left: `${nameLeft}px`, top: "50%", transform: "translateY(-50%)" }
              : {}
          }
        >
          HUY&nbsp;DO
        </div>
        </Link>

        {/* ---- NAVBAR PILL ---- */}
        <nav
          ref={navRef}
          className={`navbar glass ${isHero ? "hero" : "collapsed"}`}
        >
          <ul className="navbar-links">
            {isHero ? (
              <>
                <li>
                  <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/albums" className={({ isActive }) => isActive ? "active" : ""}>
                    Album
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/albums" className={({ isActive }) => isActive ? "active" : ""}>
                    Albums
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                    Contact
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </>
    );
  }
  
  export default Navbar;