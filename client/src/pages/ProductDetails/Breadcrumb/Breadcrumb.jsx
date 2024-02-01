import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href=" #">Anasayfa</a>
          </li>
          <li>
            <a href=" #">Kahve</a>
          </li>
          <li>
            <a href=" #">Tatlı</a>
          </li>
          <li>Bol köpüklü Caramel Macchito</li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;