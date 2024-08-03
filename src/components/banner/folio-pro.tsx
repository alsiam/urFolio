import { IoIosArrowRoundForward } from "react-icons/io";

export default function FolioProBanner() {
  return (
    <div className="banner">
      <div className="banner-wrap">
        <p className="banner-desc">
          <span className="banner-card">Folio Pro</span> Be the first to experience Folio Pro
        </p>
        <a href="https://folio-pro.alsiam.com" target="_blank" className="banner-btn">
          Get it Now <IoIosArrowRoundForward />
        </a>
      </div>
    </div>
  );
}
