import NavBar from './NavBar';
import Parallax from './Parallax'
import SectionHoC from './SectionHoC';

import AboutMe from './About';

const AboutMeSection = SectionHoC(AboutMe);

export {
  NavBar,
  Parallax,
  AboutMeSection
}
